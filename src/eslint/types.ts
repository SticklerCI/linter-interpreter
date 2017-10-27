import {
  InputReport
} from '../types/linter-interpreter';

type EslintInputReportMessages = ReadonlyArray<EslintInputReportMessage>;

export type EslintInputReports = ReadonlyArray<EslintInputReport>;

export interface EslintInputReportMessage {
  ruleId: string,
  severity: number,
  message: string,
  line: number,
  column: number,
  nodeType: string,
  source: string
}

export interface EslintInputReport extends InputReport {
  filePath: string,
  messages: EslintInputReportMessages,
  errorCount: number,
  warningCount: number
}
