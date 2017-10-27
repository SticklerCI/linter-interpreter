import { injectable } from 'inversify';
import 'reflect-metadata';
import ILinterInterpreter, {
  OutputReports,
} from '../types/linter-interpreter';
import {
  EslintInputReports,
} from './types';

function flatten(input: any[][]): any[] {
  return [].concat.apply([], input);
}

@injectable()
export default class EslintInterpreter implements ILinterInterpreter {
  public interpret(inputReports: EslintInputReports):
    OutputReports {

    return flatten(inputReports.map((input) => {
      const {
        filePath,
        messages,
      } = input;

      return messages.map((message) => {
        return {
          column: message.column,
          filepath: filePath,
          line: message.line,
          linter: 'eslint',
          rule: message.ruleId,
        };
      });
    }));
  }
}
