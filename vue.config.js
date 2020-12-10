const path = require("path");

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
        }
    },
    publicPath : './'
}