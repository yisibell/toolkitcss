import scss from 'rollup-plugin-scss'

export default {
  input: `./src/lib/index.js`,
  output: {
    file: `./lib/index.js`,
    format: 'esm',
    // Removes the hash from the asset filename
    assetFileNames: '[name][extname]',
  },
  plugins: [
    scss({
      name: 'index.css',
    }),
  ],
}

