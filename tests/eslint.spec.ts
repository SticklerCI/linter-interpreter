import { expect } from 'chai';
import cliTester from './util/cli-tester';

import EslintInterpreter from '../src/eslint';

// tslint:disable-next-line no-var-requires
const eslintInputReport = require('./fixtures/eslint/eslint-input-report.json');

// tslint:disable-next-line no-var-requires
const expectedOutput = require('./fixtures/eslint/expected-output.json');

const interpreter = new EslintInterpreter();

describe('EslintInterpreter', () => {
  describe('#interpret', () => {
    it('should produce the expected output', () => {
      const output = interpreter.interpret(eslintInputReport);
      expect(output[0])
        .to.include(expectedOutput);
    });
  });

  describe('use with cli', () => {
    it('should produce the expected output', (done) => {
      cliTester({
        inputPath: 'tests/fixtures/eslint/eslint-input-report.json',
        linter: 'eslint',
      }).then((output) => {
        expect(output[0])
          .to.include(expectedOutput);
        done();
      });
    }).timeout(5000);
  });
});
