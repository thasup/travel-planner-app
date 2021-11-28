const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/js/app.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    output: {
        libraryTarget: 'var',
        library: 'Client',
        // assetModuleFilename: 'media/[name].[hash][ext]'
    },
    module: {
        rules: [
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
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                  ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                // dependency: { not: ['url'] },
                // type: 'asset/resource',
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'media',
                        publicPath: 'media',
                        emitFile: true,
                        // esModule: false
                    }
                },
            },
            // {type: 'javascript/auto'}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/html/index.html',
            filename: './index.html',
            minify: true
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()
    ]
};