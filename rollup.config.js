import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, exports: 'named', sourcemap: true, format: 'cjs' },
    { file: pkg.module, sourcemap: true, format: 'esm' }
  ],
  external: [
    'react',
    'react-dom',
    'mapbox-gl',
    '@mapbox/mapbox-gl-draw',
    '@urbica/react-map-gl'
  ],
  plugins: [resolve(), babel(), commonjs()]
};
