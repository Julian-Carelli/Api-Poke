const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  mode:'production',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devServer: {
    contentBase: "./dist",
  },

  module: {
    rules: [
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
    new HtmlWebpackPlugin({
      template: path.resolve('./dist/index.html'),
    }),

  ],
    
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  }
}