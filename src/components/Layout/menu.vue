<template>
  <div id="layoutMenu">
    <el-menu
      :default-active="activeKey"
      class="layoutMenu-pull"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div v-for="item in list" :key="item.key">
        <el-menu-item :index="item.key" v-if="!item.children">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu :index="item.key" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <!-- 这里需要思考一下 如果存在多级菜单栏 要怎么实现递归 渲染 -->
          <el-menu-item
            :index="child.key"
            v-for="child in item.children"
            :key="child.key"
          >
            <template slot="title">
              <i :class="child.icon" v-if="child.icon"></i>
              <span slot="title">{{ child.name }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import menuData from "./menuData.js";
export default {
  name: "layoutMenu",
  data() {
    return {
      list: menuData,
      activeKey: "home",
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.list);
    },
  },
};
</script>
<style lang='scss' scoped>
#layoutMenu {
  width: 100%;
  height: 100%;
  position: relative;
  .layoutMenu-pull {
    // 设置完4个位置属性为0 元素可以铺满
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
  }
}
</style>
