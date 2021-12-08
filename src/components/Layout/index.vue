<template>
  <div id="Layout">
    <el-button>默认按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
#Layout {
  width: 100%;
  height: 100%;
  background-color: rgb(163, 223, 95);
}
</style>
