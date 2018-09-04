const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
//const svgFragments = require( 'postcss-svg-fragments' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = ({ mode, presets } = { 
    mode: "production", 
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
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
        //   plugins: [new HtmlWebpackPlugin({title: 'Lanora Design', template: './src/index.html'},
        //   ),
        //      new webpack.ProgressPlugin()],

        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                template: './src/contact.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'impressum.html',
                template: './src/impressum.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                template: './src/about.html',
            }),
              new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "style.scss"
                //chunkFilename: "[id].css"
            }),
            new BaseHrefWebpackPlugin({ baseHref: '/' })
    
          ],
    },
        
        modeConfig(mode)
    );