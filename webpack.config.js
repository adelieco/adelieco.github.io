module.exports = {
    entry: [
        './themes/adelie/source/js/app.js'
    ],
    output: {
        filename: 'public/app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader!import-glob-loader',
        }, ]
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: "source-map"
};
