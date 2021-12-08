const path = require('path');//引入path模块，是为了方便路径的拼写
const resolve = (dir) => path.join(__dirname, dir);
// 大概和日常开发相关的就这么多。其他的后面在配了
module.exports ={
    publicPath: '/',//部署应用包的路径  单独根据项目讲解
    outputDir:'dist',//打包后输出的路径
    assetsDir:'dist/assets',//静态文件路径
    // 本地服务器相关的配置
    devServer:{
        port: 9999,//端口号
        open:true,//是否同步打开浏览器
        https: false,  // 是否https
        // 代理，服务器。接口跨域用的
        proxy:{
            // '/api':'http://localhost:4000'
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: { '^/api': '' },
              },
        }
    },
    // 这里是进行 vue-cli没有的额外webpack的配置。 chainWebpack configureWebpack 这两个有什么区别？
    chainWebpack:config =>{
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
    }
} 