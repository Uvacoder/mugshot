import { MugshotSelector } from '../lib/mugshot';

export interface ScreenshotOptions {
  /**
   * All elements identified by this selector will be covered with {@link ignoreColor}
   * before taking the screenshot.
   */
  ignore?: MugshotSelector; // TODO: support multiple selectors

  /**
   * The color used to covered elements matched by the {@link ignore} selector.
   *
   * @example
   * #ff0000 // 6 hex char notation
   *
   * @example
   * #ccc // 3 hex char notation
   *
   * @default #000
   */
  ignoreColor?: string;
}

/**
 * Thrown when the selector passed to {@link Mugshot.check} matches more than one
 * element.
 */
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
   * Take a screenshot of a single element.
   *
   * Will throw {@link TooManyElementsError} if `selector` matches more than one element.
   */
  takeScreenshot(
    selector: MugshotSelector,
    options?: ScreenshotOptions
  ): Promise<Buffer>;
}
