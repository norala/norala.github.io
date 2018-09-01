const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
    output: {
        filename: "bundle.js"
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
    plugins: [new MiniCssExtractPlugin(),]
});


