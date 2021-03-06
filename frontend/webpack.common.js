const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'

const config = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: '[name]-[hash].js',
        chunkFilename: 'chunk-[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['public']}),
        new HtmlWebpackPlugin({
            minify: isDev
                ? false
                : {
                    collapseWhitespace: true,
                    removeComments: true,
                    useShortDoctype: true,
                    minifyCSS: true,
                },
            template: './static/index.html',
            title: 'Spring Boot + React.js',
            description: `Spring Boot + React.js Example`,
            url: 'https://ohjongsung.io',
        })
    ]
};

module.exports = config
