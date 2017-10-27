import { injectable } from 'inversify';
import 'reflect-metadata';
import ILinterInterpreter, {
  OutputReports,
} from '../types/linter-interpreter';
import {
  TslintInputReports,
} from './types';

@injectable()
export default class TslintInterpreter implements ILinterInterpreter {
  public interpret(inputReports: TslintInputReports):
    OutputReports {

    return inputReports.map((input) => {
      const {
        name,
        ruleName,
        startPosition,
      } = input;

      return {
        column: startPosition.position,
        filepath: name,
        line: startPosition.line,
        linter: 'tslint',
        rule: ruleName,
      };
    });
  }
}
