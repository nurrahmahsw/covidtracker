const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: '/src/temp.html',
        filename: "bundle.js"
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options : {
                    limit : 8192
                }
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/temp.html",
            filename: "index.html"
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',//your ip address
        port: 8080,
        disableHostCheck: true
    }
}