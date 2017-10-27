export type InputReports = ReadonlyArray<InputReport>
export type OutputReports = ReadonlyArray<OutputReport>

export interface InputReport {}

export interface OutputReport {
  linter: string,
  rule: string,
  filepath: string,
  line: number,
  column: number,
}

export default interface ILinterInterpreter {
  interpret(inputReports: InputReports) : OutputReports;
}
