const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require('path');
 var webpack = require('webpack');

 const exampleFolder = './layout_001/try_01';

 module.exports = {
    entry: {
        'index': `${exampleFolder}/index.js`
    },
    output: {
       path: path.resolve(__dirname, `${exampleFolder}/dist`),
       filename: 'output.bundle.js',
       libraryTarget: 'umd',
       library: 'CssLib'
    },
    module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]  //Preset used for env setup
                }
            }
        },
        {
          test: /\.css/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ] // end rules
    },
    plugins: [ // webpack plugins
      new MiniCssExtractPlugin({
         filename: 'output.css'
      })
    ],
     devServer: {
        // https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920
        // watch for index.html and demo.css changes
        // contentBase: path.resolve(__dirname, "./"),
        writeToDisk: true,
        contentBase: path.join(__dirname, `${exampleFolder}`),
        hot: true
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };