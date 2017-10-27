import { Container } from "inversify";
import TYPES, { ILinterInterpreter } from "./types";
import EslintInterpreter from './eslint';
import TsLintInterpreter from './tslint';

const myContainer = new Container();

myContainer.bind<ILinterInterpreter>(TYPES.eslint).to(EslintInterpreter);
myContainer.bind<ILinterInterpreter>(TYPES.tslint).to(TsLintInterpreter);

export { myContainer };
