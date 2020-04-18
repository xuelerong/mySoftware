<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="inlineShow">
        <i class="icon service"/>
        <span class="text">客服</span>
      </div>
      <div @click="inlineShop">
        <i class="icon shop"/>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"/>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="inlinePurchase">购买</div>
    </div>
  </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "detailbuttom",
        methods: {
            addToCart() {
                this.$emit('addCart');
            },
            inlineShow(){
                Toast('该功能暂未开放');
                console.log('dffd')
            },
            inlineShop(){
                Toast('该功能暂未开放');
                console.log('dffd')
            },
            inlinePurchase(){
                Toast('该功能暂未开放');
                console.log('dffd')
            }
        }
    }
</script>

<style scoped>
  .bottom-bar {
    width: 100vw;
    height: 2.16rem;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item > div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 0.52rem;
  }

  .bar-left .icon {
    display: block;
    width: 0.88rem;
    height: 0.88rem;
    margin: 0.32rem auto -0.4rem;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  }
/*背景图定位*/
  .bar-left .service {
    background-position: 0 -2.16rem;
  }
  .bar-left .shop {
    background-position: 0 -3.92rem;
  }
  .bar-right {
    font-size: 0.6rem;
    color: #fff;
    line-height: 2.32rem;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #02C3D2;
  }
</style>
