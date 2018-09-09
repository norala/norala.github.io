const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = env => ({
    output: {
        path: path.join(__dirname, "./docs"),
        filename: "bundle.js",
        publicPath: "/norala.github.io/"
    },
    module: {
        rules: [
            {
                test: /\.scss$/ ,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            { 
                test: /\.php$/, query: '', 
                loaders: [ "html-minify", "php-loader" ] 
          },
        ]
    },
    plugins: [new MiniCssExtractPlugin(),],
});


