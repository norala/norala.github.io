const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSass = new ExtractTextPlugin('main.css');

module.exports = env => ({
    module: {
        rules: [
            {
                test: /\.scss$/ ,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader', 'sass-loader']}) 
            },
            {
              test: /\.(gif|png|jpe?g|svg)/i,
              use: [
                  "file-loader",
                  {
                      loader: "svg-inline-loader",
                      options: {
                        limit: 8192
                      }
                  }
              ]
          },
          {
            test: /\.php$/,
            loaders: [
              'html-minify',
              'php-loader'
            ]
          },

        ]
    },
    plugins: [
        ExtractSass
      ]
});

// test: /\.svg$/,
//                 use: [
//                   {
//                     loader: 'svg-inline-loader',
//                     options: {
//                       limit: 8192
//                     },
                    
//                   }
//                 ]