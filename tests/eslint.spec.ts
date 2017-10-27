import { expect } from 'chai';
import { spawn } from 'child_process';

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
      const cli = spawn('sh', [
        '-c', 'cat tests/fixtures/eslint/eslint-input-report.json | ts-node src/cli.ts --linter eslint',
      ]);
      let output = '';
      cli.stdout.on('data', (data) => {
        output += data;
      });

      cli.on('close', () => {
        const parsed = JSON.parse(output);
        expect(parsed[0])
          .to.include(expectedOutput);
        done();
      });
    }).timeout(5000);
  });
});
