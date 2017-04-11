module.exports = {
    entry: "./ts/oopdemo.ts",
    output: {
        path: __dirname+"/dist",
        filename: "appbundle.js"
    },
    module: {
        loaders: [{test:/\.ts$/, loader:"ts-loader"}]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}