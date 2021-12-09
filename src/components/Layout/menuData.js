// 通常我们都可以通过 后端请求配置我们的菜单列表。
// 这里我直接用一个js来控制了。
const menuData = [
    {
        name:'首页',
        key:'home',
        path:'/home',
        icon:'el-icon-s-home'
    },
    {
        name:'子菜单',
        key:'menu1',
        path:'/menu1',
        icon:'el-icon-s-data',
        children:[
            {
                name:'子菜单1',
                key:'menu1',
                path:'/menu1/child1',
                icon:'', 
            },
            {
                name:'子菜单2',
                key:'menu2',
                path:'/menu1/child2',
                icon:'', 
            }
        ]
    },
    
]

// 这里这个 export default 为什么要用这个。后面需要补充es6 模块化的知识
export default menuData