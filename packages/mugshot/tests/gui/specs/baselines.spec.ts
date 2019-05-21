import path from 'path';
import fs from 'fs-extra';
import {
  beforeEach,
  expectIdenticalScreenshots,
  describe,
  expect,
  it,
  loadFixture
} from '../../../../../tests/gui/suite';
import Mugshot from '../../../src/lib/mugshot';
import WebdriverIOAdapter from '@mugshot/webdriverio';

describe('Mugshot', async () => {
  describe('baselines', () => {
    let resultsPath!: string;

    beforeEach(async () => {
      resultsPath = await fs.mkdtemp(`/tmp/mugshot-${process.env.BROWSER}`);
    });

    it('should write first baseline', async browser => {
      await loadFixture('simple');

      const baselinePath = path.join(resultsPath, 'new.png');

      const mugshot = new Mugshot(new WebdriverIOAdapter(browser), resultsPath, {
        createBaselines: true
      });

      const resultWhenMissingBaseline = await mugshot.check('new');
      expect(resultWhenMissingBaseline.matches).to.be.true;
      expect(
        await fs.pathExists(baselinePath),
        'Baseline wasn\'t written'
      ).to.be.true;

      await expectIdenticalScreenshots(
        path.join(resultsPath, 'new.png'),
        'simple',
        `The written baseline ${baselinePath} doesn't match expected one`
      );
    });

    it('should create parent folders when writing baseline', async browser => {
      await loadFixture('simple');

      const mugshot = new Mugshot(new WebdriverIOAdapter(browser), resultsPath, {
        createBaselines: true
      });

      await mugshot.check('foo/bar/new');

      expect(
        await fs.pathExists(path.join(resultsPath, 'foo/bar')),
        'Baseline folder structure wasn\'t created'
      ).to.be.true;
    });
  });
});