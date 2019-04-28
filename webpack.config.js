const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
require("@babel/polyfill");


module.exports = {
    entry: ["@babel/polyfill", './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new TerserPlugin()
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '192.168.145.31',
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.pug'
        }),
        
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img'
                    },
                  },
                ],
              }
        ]
    }
}