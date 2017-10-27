type EslintInputReportMessages = ReadonlyArray<IEslintInputReportMessage>;

export type EslintInputReports = ReadonlyArray<IEslintInputReport>;

export interface IEslintInputReportMessage {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
  nodeType: string;
  source: string;
}

export interface IEslintInputReport {
  filePath: string;
  messages: EslintInputReportMessages;
  errorCount: number;
  warningCount: number;
}
