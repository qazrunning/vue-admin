# vue搭建过程

​	我们会用到vue-cli这个vue脚手架。使用@4的版本。目前大多数公司还是这个版本

1. `vue --version` 先查看vue-cli的版本
2. `npm uninstall vue/cli -g`/`yarn global remove vue-cli`卸载当前版本
3. `yarn global add @vue/cli@4` 安装大版本为4的cli（目前最多公司用的。v5版本还没有大量商用）
4. 如果yarn不行就用npm

## 创建一个项目

1. 我们可以使用vue-cli的命令行或者ui界面进行创建

2. `vue create cl-admin` 创建一个项目

3. 进入项目 正常打开

4. 我们的项目会用到样式 推荐less

   1. 安装less
   2. yarn add less less-loader
   3. 因为脚手架版本问题。所以less-loader需要会退到v6的版本
   4. yarn add less-loader@6 
   5. 这样子我们的less就可以用了

5. 我们使用vue就说明我们需要配置单页面，所以会需要到我们的路由

6. 配置vue-router

   1. yarn add vue-router 安装

   2. npm install vue-router
      
   2. 在src下创建 router/index.js
      
   2. 22.03.13 安装 3.5.3
      
   2.  引入
      
      ```
      import VueRouter from 'vue-router'
      import Vue from 'vue'
      
       Vue.use(VueRouter)
      ```
      
      
      
   2. 在main.js 导出 `import router from './router/index'`
      
   7. 把我们的 router-view 标签放到你要用的地方
   
7. vue-cli的脚手架配置文件 在根目录下创建 vue.config.js 

   ```
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
             //要结合env 使用 和环境有关
               // '/api':'http://localhost:4000'
               '/apis': {
                   target: 'http://124.222.89.187:6679',
                 },
           }
       },
       // 这里是进行 vue-cli没有的额外webpack的配置。 chainWebpack configureWebpack 这两个有什么区别？
       chainWebpack:config =>{
       config.resolve.alias // 添加别名
         .set('@', resolve('src'))
       }
   } 
   ```

   然后重新启动

8. 安装axios 

   1. yarn add axios
   2. 创建相关文件夹




