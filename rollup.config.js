import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'brightleafReactHooks',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve({
        external: ['react', 'react-dom', '@hapi/nes', 'graphql-request'],
      }),
      commonjs({
        include: 'node_modules/**',
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', '@hapi/nes', 'graphql-request'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
