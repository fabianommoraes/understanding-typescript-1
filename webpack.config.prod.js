const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    devtool: 'none',
    module: {
       rules: [
           {
               test: /\.ts$/,
               use: 'ts-loader',
               exclude: /node_modules/,
           }
       ] 
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}