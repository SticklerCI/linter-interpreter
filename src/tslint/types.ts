import {
  InputReport
} from '../types/linter-interpreter';

export type TslintInputReports = ReadonlyArray<TslintInputReport>;

interface Position {
  character: number,
  line: number,
  position: number
}

interface Fix {
  innterStart: number,
  innerLength: number,
  innerText: string
}

export interface TslintInputReport extends InputReport {
  endPosition: Position,
  failure: string,
  fix: Fix,
  name: string,
  ruleName: string,
  ruleSeverity: string,
  startPosition: Position
}
