var webpack = require('webpack'),
       path = require('path');

var chunk = {
            name: 'vendor',
            filename: 'vendor.bundle.js'};

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(chunk)
    ]
};