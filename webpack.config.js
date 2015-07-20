module.exports = {
    entry: {

     app: ['webpack/hot/dev-server', './src/app.jsx' ]
    },
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader:"style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    }
};