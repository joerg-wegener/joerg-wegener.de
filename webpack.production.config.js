import path from 'node:path'
import url from 'node:url'
import PugPlugin from 'pug-plugin'

export default {
  entry: {
    index: './src/views/index.pug',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'dist'),
  },
  plugins: [
    new PugPlugin({
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
    ],
  },
  mode: 'production',
}
