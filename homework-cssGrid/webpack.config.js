const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app.js', './scss/main.scss'],
  output: {
    filename: 'site/bundle.js',
  },
  module: {
    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      // define where to save the file
      filename: 'site/css/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
