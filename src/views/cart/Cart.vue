<template>
  <div>
   <!-- 导航-->
    <Navigation class="cart-nav">
      <div class="nav-center" slot="center">购物车({{getUserList}})</div>
    </Navigation>
    <ImgCart/>
   <!-- 商品列表-->
    <cart-list/>
    <!--底部汇总-->
    <car-buttom-bar/>
  </div>
</template>

<script>
  import Navigation from "../../components/navigation/Navigation";
  import CartList from "./childCart/CartList";
  import ImgCart from "./childCart/ImgCart";
  import CarButtomBar from "./childCart/CarButtomBar";
    export default {
        name: "Cart",
        components:{
            Navigation,
            CartList,
            ImgCart,
            CarButtomBar
        },
        computed:{
            getUserList(){
                return this.$store.state.careList.length
            }
        }
    }
</script>

<style scoped>
  .cart-nav {
    background-color:#02C3D2;
    color: #fff;
  }
  .diro{
    position: absolute;
    margin-top: 3rem;
  }
</style>