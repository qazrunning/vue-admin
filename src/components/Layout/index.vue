<template>
  <div id="Layout">
    <div class="left">
      <layoutMenu></layoutMenu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import layoutMenu from './menu.vue'
export default {
  name: "Login",
  components:{
    layoutMenu
  }
};
</script>

<style lang='scss'>
#Layout {
  width: 100%;
  height: 100vh;
  background-color: rgb(163, 223, 95);
  display: flex;
  .left{
    width: 200px;
  }
}
</style>
