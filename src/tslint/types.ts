export type TslintInputReports = ReadonlyArray<ITslintInputReport>;

interface IPosition {
  character: number;
  line: number;
  position: number;
}

interface IFix {
  innterStart: number;
  innerLength: number;
  innerText: string;
}

export interface ITslintInputReport {
  endPosition: IPosition;
  failure: string;
  fix: IFix;
  name: string;
  ruleName: string;
  ruleSeverity: string;
  startPosition: IPosition;
}
