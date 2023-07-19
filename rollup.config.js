import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from '@rollup/plugin-commonjs';
// import replace from 'rollup-plugin-replace';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env']
      }),
      // peerDepsExternal({
      //   peerDependencies: ["@storybook/addon-knobs"],
      // }),
      // dynamicImport(),
      external(),
      resolve({jsnext: true, preferBuiltins: false}),
      terser(),
      commonjs({
        include: 'node_modules/**',
      }),
      // replace({
      //   include: 'node_modules/util/util.js',
      //   values: {
      //     'eval(' : '[eval][0]('
      //   }
      // })
    ]
  }
];