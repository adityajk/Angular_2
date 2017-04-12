module.exports = {
    entry: "./src/boot.ts",
    output: {
        path: __dirname+"/dist",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{test:/\.ts$/, loader:"ts-loader"}]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}