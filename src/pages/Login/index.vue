<template>
  <div id="Home">登录</div>
</template>


<script>
import cellPhone from '@/api/Login/index.js'
export default {
  name: "Login",
  created(){
    this.cellPhoneHttp()
  },
  methods:{
    async cellPhoneHttp(){
      let params = {
        phone:'18648939539',
        password:'cl970079'
      };
      
      const res = await cellPhone(params)
      console.log(res)
      return 
    }
  }
};
</script>

<style>
#Home {
  width: 100%;
  height: 100%;
  background-color: rgb(163, 223, 95);
}
</style>
