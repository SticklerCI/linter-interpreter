#!/usr/bin/env node

import getStdin = require('get-stdin');
import {
  argv,
} from 'yargs';

import { myContainer } from './inversify.config';
import TYPES, { ILinterInterpreter } from './types';

getStdin()
  .then((input) => {
    const parsed = JSON.parse(input);
    const interpreter = myContainer.get<ILinterInterpreter>(TYPES[argv.linter]);

    const output = interpreter.interpret(parsed);

    process.stdout.write(`${JSON.stringify(output)}\n`);
  })
  .catch((error) => {

    // tslint:disable-next-line:no-console
    console.error(error);
  });
