/* eslint-disable semi */
import { MugshotSelector } from '../lib/mugshot';

export type ScreenshotOptions = {
  /**
   * All elements identified by this selector will be painted black
   * before taking the screenshot.
   * TODO: support rects
   */
  ignore?: string;
};

export class TooManyElementsError extends Error {
  constructor(selector: MugshotSelector) {
    super(`More than 1 elements matches ${selector}.

You can only take a screenshot of one element. Please narrow down your selector.`);
  }
}

export default interface Screenshotter {
  /**
   * Take a viewport screenshot.
   */
  takeScreenshot(options?: ScreenshotOptions): Promise<Buffer>;

  /**
   * Take a screenshot of an element.
   *
   * Will throw if `selector` matches more than one element.
   */
  takeScreenshot(
    selector: MugshotSelector,
    options?: ScreenshotOptions
  ): Promise<Buffer>;
}
