const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './working/index.js',
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ca]ss$/,
        loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              highlight: function(code) {
                return require('highlight.js').highlightAuto(code).value
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './working/index.html',
      historyApiFallback: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(process.cwd(), '/public'),
          to: path.join(process.cwd(), '/dist'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
    alias: {
      '@brightleaf/react-hooks': path.resolve(__dirname, '../src'),
    },
  },
  output: {
    path: path.join(process.cwd(), '/dist/examples'),
    publicPath: '/react-hooks/examples/',
    filename: 'bundle.js',
  },
}
