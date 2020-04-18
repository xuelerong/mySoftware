<template>
  <div id="app">
    <!--    被包裹在keep-alive中的组件的状态将会被保留-->
    <!--      exclude作用是把详情页的组件排除在外，让其数据更新-->
   <keep-alive exclude="Detail">
     <router-view/>
   </keep-alive>
   <tarbar-mesage/>
  </div>
</template>
<script>

import TarbarMesage from "./components/tarbar/TarbarMesage";
export default {
    name:"App",
    components:{
        TarbarMesage
    }
}
</script>
<style lang="less">
@import "assets/css/overall.css";
</style>
