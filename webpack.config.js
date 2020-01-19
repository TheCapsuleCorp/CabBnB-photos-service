const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    library: 'Photos',
    publicPath: '/',
  }
};
