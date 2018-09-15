const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = ({ mode, presets } = { 
    mode: "production", 
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                process.env.NODE_ENV !== 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "style-loader",
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ],
        }   
    ]
},
    presets: [] }) => 
        webpackMerge(
        {
            mode,
            plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                template: './src/contact.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                template: './src/about.html',
            }),
              new MiniCssExtractPlugin({
                filename: "style.scss"
            }),
            new BaseHrefWebpackPlugin({ baseHref: '/' })
          ],
    }, 
    modeConfig(mode)
);