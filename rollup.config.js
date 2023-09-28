import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import generateDeclarations from 'rollup-plugin-generate-declarations';

export default [
  {
    input: 'src/app.ts',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      typescript(),
      generateDeclarations(),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
    ],
    external: Object.keys(pkg.dependencies),
  },
];
