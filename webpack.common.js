const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js', // this line is the only difference
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.(s?)css$/,
                // test: /\.s[ac]ss$/,
                use: [
                    
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                            return [
                                // require('precss'),
                                require('autoprefixer')
                            ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}
