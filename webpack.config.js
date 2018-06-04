var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: path.resolve( __dirname, 'src', 'app' ),
    output: {
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve( __dirname, './' ),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /(\.css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Main',
            template: 'index.hbs',
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve( __dirname, 'src' ),
            'Components': path.resolve( __dirname, 'src', 'components' ),
            'Styles': path.resolve( __dirname, 'src', 'styles' ),
        },
        extensions: ['.js', '.jsx', '.css'],
    },
};