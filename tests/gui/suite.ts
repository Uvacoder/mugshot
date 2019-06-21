import { remote } from 'webdriverio';
import fs from 'fs-extra';
import path from 'path';
import { expect } from 'chai';
import {
  runnerAfter,
  runnerBefore,
  runnerBeforeEach,
  runnerDescribe,
  runnerIt
} from '../mocha-runner';
import PixelDiffer from '../../packages/mugshot/src/lib/pixel-differ';

export { expect };

type Browser = ReturnType<typeof remote>;
export type TestDefinition = (browser: Browser) => Promise<any> | void;

const { BROWSER = 'chrome', SELENIUM_HOST = 'localhost' } = process.env;

let suiteNesting = 0;
// These will hold root suite level instances. Since most, if not all test
// runners run tests inside of a suite sequentially and since we only set

// up the browser once per root test suite, these should be "thread safe".
let rootSuiteBrowser: Browser;

function getBrowserChromeSize() {
  return {
    width: window.outerWidth - window.innerWidth,
    height: window.outerHeight - window.innerHeight
  };
}

export async function setViewportSize(width: number, height: number) {
  const {
    // @ts-ignore because the return type is not properly inferred
    width: chromeWidth,
    // @ts-ignore
    height: chromeHeight
  } = await rootSuiteBrowser.execute(getBrowserChromeSize);

  const actualWidth = width + chromeWidth;
  const actualHeight = height + chromeHeight;

  // Chrome...
  await rootSuiteBrowser.setWindowSize(actualWidth, actualHeight);

  // Firefox...
  try {
    await rootSuiteBrowser.setWindowRect(0, 0, actualWidth, actualHeight);
    // eslint-disable-next-line no-empty
  } catch (e) {
  }
}

export async function loadFixture(name: string) {
  await rootSuiteBrowser.url(`file:///var/www/html/${name}.html`);

  await setViewportSize(1024, 768);
}

/**
 * Run your gui tests in a fresh Selenium session.
 *
 * Nested calls will preserve the root session.
 *
 * Tests and hooks will receive the browser instance.
 */
export function describe(name: string, definition: () => void) {
  suiteNesting++;

  runnerDescribe(suiteNesting === 1 ? `${name}:${BROWSER}` : name, () => {
    // We only want to set up hooks once - for the root suite.
    if (suiteNesting === 1) {
      setupHooks();
    }

    definition();
  });

  suiteNesting--;
}

export function beforeEach(definition: TestDefinition) {
  runnerBeforeEach(() => definition(rootSuiteBrowser));
}

export function it(name: string, definition: TestDefinition = () => {}) {
  runnerIt(name, () => Promise.resolve(definition(rootSuiteBrowser)));
}

function setupHooks() {
  runnerBefore(async function connectToSelenium() {
    const options: WebDriver.Options = {
      hostname: SELENIUM_HOST,
      capabilities: { browserName: BROWSER },
      logLevel: 'error'
    };

    rootSuiteBrowser = await remote(options);

    return rootSuiteBrowser;
  });

  runnerAfter(function endSession() {
    return rootSuiteBrowser.deleteSession();
  });
}

/**
 * Use PixelDiffer to compare two screenshots. Assume that PixelDiffer passes all of its tests.
 */
export async function expectIdenticalScreenshots(
  screenshot: Buffer | string,
  baselineName: string,
  message?: string
) {
  const baseline = await fs.readFile(
    path.join(__dirname, `screenshots/${BROWSER}/${baselineName}.png`)
  );

  if (typeof screenshot === 'string') {
    // eslint-disable-next-line no-param-reassign
    screenshot = await fs.readFile(screenshot);
  }

  const differ = new PixelDiffer({ threshold: 0 });
  expect((await differ.compare(baseline, screenshot)).matches, message).to.be.true;
}

export const screenshotsPath = path.join(__dirname, 'screenshots');
