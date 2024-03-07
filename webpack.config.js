const path = require('path');

module.exports = {
    entry: './src/main/typescript/application.ts' ,
    module: {
        rules: [
            {
             test: /\.ts$/,
             use: "ts-loader",
             exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/main/resources/static/javascript')
    },
    mode: "development",
};