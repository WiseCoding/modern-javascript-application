const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
    // name: './src/js/other.js',
  },

  output: {
    filename: '[name]-[contentHash].js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
};
