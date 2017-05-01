import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.es',
  moduleName: 'bipolar',
  plugins: [
    babel(),
  ],
  targets: [
    {
      format: 'iife',
      indent: true,
      sourceMap: true,
      dest: 'dist/bipolar.js'
    },
    {
      format: 'cjs',
      dest: 'index.js',
    }
  ]
};
