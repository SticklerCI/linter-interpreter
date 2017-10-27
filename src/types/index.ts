import ILinterInterpreter from './linter-interpreter';

const TYPES = {
  eslint: Symbol('Eslint'),
  tslint: Symbol('Tslint'),
};

export default TYPES;

export {
  ILinterInterpreter,
};
