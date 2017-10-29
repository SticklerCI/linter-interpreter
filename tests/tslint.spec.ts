import { expect } from 'chai';
import cliTester from './util/cli-tester';

import TslintInterpreter from '../src/tslint';

// tslint:disable-next-line no-var-requires
const tslintInputReport = require('./fixtures/tslint/tslint-input-report.json');

// tslint:disable-next-line no-var-requires
const expectedOutput = require('./fixtures/tslint/expected-output.json');

const interpreter = new TslintInterpreter();

describe('TslintInterpreter', () => {
  describe('#interpret', () => {
    it('should produce the expected output', () => {
      const output = interpreter.interpret(tslintInputReport);
      expect(output[0])
        .to.include(expectedOutput);
    });
  });

  describe('use with cli', () => {
    it('should produce the expected output', (done) => {
      cliTester({
        inputPath: 'tests/fixtures/tslint/tslint-input-report.json',
        linter: 'tslint',
      }).then((output) => {
        expect(output[0])
          .to.include(expectedOutput);
        done();
      });
    }).timeout(5000);
  });
});
