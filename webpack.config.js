const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /(node_modules)/,
                loader: "ts-loader",
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            }
        ]
    },
    resolve: { extensions: ["*", ".ts", ".js"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js",
        libraryTarget: 'commonjs2'
    },
    externals: {
        react: 'react',
    }
};
