import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy'; // Import the copy plugin
import html from "rollup-plugin-html";
import { string } from 'rollup-plugin-string';

const production = process.env.NODE_ENV === 'production';

export default {
  input: './src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'iife',
    name: 'Papajoke',
  },
  plugins: [
    html({ include: "**/*.html" }),
    production && terser(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      extensions: ['.js', '.html'],
    }),
    string({
      include: './src/components/**/*.css',
    }),
    postcss({
      extract: 'app.css',
      minimize: production,
      exclude: './src/components/**/*.css',
    }),
    copy({
      targets: [
        { src: './src/index.html', dest: 'dist' },
        { src: './src/data/jokes.json', dest: 'dist/data' },
      ],
      verbose: true,
    }),
  ],
};
