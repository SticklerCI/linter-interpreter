import { expect } from 'chai';
import { spawn } from 'child_process';

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
      const cli = spawn('sh', [
        '-c', 'cat tests/fixtures/tslint/tslint-input-report.json | ts-node src/cli.ts --linter tslint',
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
