const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin")

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        port: 8808 // 端口号配置
    },
    assetsDir: 'assets',
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap' // 高德地图配置
        },
        plugins: [
            new CompressionPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip', //使用gzip压缩
                test: /\.js$|\.html$|\.css/, // 需要压缩的文件类型
                threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
                deleteOriginalAssets: false, // 是否删除原文件
                minRatio: 0.8
            })
        ]
    },
    publicPath: './'
}