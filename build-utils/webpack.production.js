const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = env => ({
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "./dist"
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
            }

        ]
    },
    plugins: [new MiniCssExtractPlugin(),],
});


