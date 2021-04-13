const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },

    mode:'production',

    performance: {
        hints: false
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
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
        test: /\.(gif|jpg)$/,
        loader: 'url-loader',
        options: {
            limit:30000,
            name: '[path][name].[ext]?[hash]',
        }
    },


    {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
    },
            
    ],},

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
            filename:'index.html'
    }),
    ],
    
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    }
}