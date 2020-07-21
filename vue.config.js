module.exports = {
    pages: {
        index: {
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            title: 'VUE-CMS系统',
            entry: 'src/main.js',
        }
    },
    //关闭scokjs-node报错
    devServer: {
        sockHost: 'http://127.0.0.1:8086/',
        port: 8086,     // 端口
        disableHostCheck: true,
        proxy: {
            '/cms': {
                //target: 'http://192.168.0.52:7071',
                target: 'http://127.0.0.1:3000',
                ws: true,
                changeOrigin: true,
                // pathRewrite: {
                //   '^/api': '/dgscgl'  //通过pathRewrite重写地址，将前缀/api转为/
                // }
            }
        }
    },
    //lintOnSave: false   // 取消 eslint 验证
}
