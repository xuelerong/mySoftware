<template>
  <tarbar>
    <tarbat-item path="/home">
      <img slot="icon-one" src="../../assets/img/tabbar/首页.png" alt="">
      <img slot="icon-two" src="../../assets/img/tabbar/首页2.png" alt="">
      <div slot="text">首页</div>
    </tarbat-item>
    <tarbat-item path="/category">
        <img slot="icon-one" src="../../assets/img/tabbar/分类.png" alt="">
        <img slot="icon-two" src="../../assets/img/tabbar/分类1.png" alt="">
        <div slot="text">分类</div>
    </tarbat-item>
    <tarbat-item path="/music" activeColor="red">
      <img slot="icon-one" src="../../assets/img/tabbar/音乐1.png" alt="">
      <img slot="icon-two" src="../../assets/img/tabbar/音乐.png" alt="">
      <div slot="text">music</div>
    </tarbat-item>
    <tarbat-item path="/cart">
        <img slot="icon-one" src="../../assets/img/tabbar/购物车.png" alt="">
        <img slot="icon-two" src="../../assets/img/tabbar/购物车3.png" alt="">
        <div slot="text">购物车</div>
    </tarbat-item>
    <tarbat-item path="/profile">
        <img slot="icon-one" src="../../assets/img/tabbar/我的.png" alt="">
        <img slot="icon-two" src="../../assets/img/tabbar/我的4.png" alt="">
        <div slot="text">我的</div>
    </tarbat-item>
  </tarbar>
</template>

<script>
    import Tarbar from "./Tarbar";
    import TarbatItem from "./TarbatItem";

    export default {
        name: "TarbarMesage",
        components: {
            Tarbar,
            TarbatItem,
        }
    }
</script>

<style scoped>

</style>