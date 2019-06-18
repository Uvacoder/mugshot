import Browser from '../interfaces/browser';
import PNGProcessor from '../interfaces/png-processor';
import { MugshotSelector } from './mugshot';
import Screenshotter, { ScreenshotOptions } from '../interfaces/screenshotter';

export default class MugshotScreenshotter implements Screenshotter {
  private browser: Browser;

  private pngProcessor: PNGProcessor;

  constructor(browser: Browser, pngProcessor: PNGProcessor) {
    this.browser = browser;
    this.pngProcessor = pngProcessor;
  }

  async takeScreenshot(
    selectorOrOptions?: MugshotSelector | ScreenshotOptions,
    options: ScreenshotOptions = {}
  ): Promise<Buffer> {
    let selector: MugshotSelector | undefined;

    if (typeof selectorOrOptions === 'string') {
      selector = selectorOrOptions;
    } else if (typeof selectorOrOptions === 'object') {
      // eslint-disable-next-line no-param-reassign
      options = selectorOrOptions;
    }

    let screenshot = Buffer.from(await this.browser.takeScreenshot(), 'base64');

    if (selector) {
      screenshot = await this.crop(selector, screenshot);
    }

    if (options.ignore) {
      screenshot = await this.ignore(options.ignore, screenshot);
    }

    return screenshot;
  }

  private async crop(selector: MugshotSelector, screenshot: Buffer) {
    const rect = await this.browser.getElementRect(selector);

    return this.pngProcessor.crop(screenshot, rect.x, rect.y, rect.width, rect.height);
  }

  private async ignore(selector: MugshotSelector, screenshot: Buffer) {
    const rect = await this.browser.getElementRect(selector);

    return this.pngProcessor.paint(screenshot, rect.x, rect.y, rect.width, rect.height, '#000');
  }
}