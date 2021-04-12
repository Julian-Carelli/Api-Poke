const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/'
  },

  mode:'development',

  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    open:true,
    hot:true,
    port: 3000
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: 
    [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },

      {
        test:/\.(css|scss)$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:1
            }
          },
            'sass-loader'
        ]
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

    

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      scriptLoading:'defer'
    })
  ],  
}