export type InputReports = ReadonlyArray<{}>;
export type OutputReports = ReadonlyArray<IOutputReport>;

export interface IOutputReport {
  linter: string;
  rule: string;
  filepath: string;
  line: number;
  column: number;
}

export default interface ILinterInterpreter {
  interpret(inputReports: InputReports): OutputReports;
}
