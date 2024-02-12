import path from 'node:path'
import url from 'node:url'
import PugPlugin from 'pug-plugin'
import NodemonPlugin from 'nodemon-webpack-plugin'

export default {
  entry: {
    index: './src/views/index.pug',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'dist'),
    clean: true,
  },
  watchOptions: {
    poll: 500,
  },
  plugins: [
    new PugPlugin({
      js: {
        filename: 'assets/js/[name].js',
      },
      css: {
        filename: 'assets/css/[name].css',
      },
    }),
    new NodemonPlugin({
      script: './src/app.js',
      nodeArgs: ['--inspect=0.0.0.0:9229'],
      ignore: ['./src/public/**.*'],
      watch: path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'src'),
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
  mode: 'development',
}
