import { spawn } from 'child_process';

export default ({ inputPath, linter }) => {
  return new Promise((resolve) => {
    const cli = spawn('sh', [
      '-c', `cat ${inputPath} | ts-node src/cli.ts --linter ${linter}`,
    ]);

    let output = '';
    cli.stdout.on('data', (data) => {
      output += data;
    });

    cli.on('close', () => {
      const parsed = JSON.parse(output);
      resolve(JSON.parse(output));
    });
  });
};
