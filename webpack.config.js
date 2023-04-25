const {plugins} = require("@babel/preset-env/lib/plugins-compat-data");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Babel config
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                //If we want declare the preset of babel in config of webpack
                // use: {
                //     loader: "babel-loader",
                //     options: {
                //        presets: ['@babel/preset-env']
                //     }
                // }
            },
            //style config
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}
