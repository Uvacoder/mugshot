export interface DiffPassingResult {
  matches: true;
}

export interface DiffFailingResult {
  matches: false;
  /**
   * A PNG MIME encoded buffer of the diff image.
   */
  diff: Buffer;
}

export type DiffResult = DiffPassingResult | DiffFailingResult;

/**
 * Compare two screenshots and produce a diff image if necessary.
 */
export default interface PNGDiffer {
  /**
   * @param expected PNG encoded buffer.
   * @param actual PNG encoded buffer.
   */
  compare: (expected: Buffer, actual: Buffer) => Promise<DiffResult>;
}
