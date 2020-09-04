<template>
  <div id="shop-item">
        <div class="item-selector">
          <ChenckButtom :checket="itemInfo.check" @click.native="ischecket"/>
        </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{itemInfo.price}}</div>
        <div class="item-count">X {{itemInfo.counter}}</div>
      </div>
    </div>
  </div>
</template>

<script>

    import ChenckButtom from "./ChenckButtom";
    export default {
        name: "CartListItem",
        components: {
            ChenckButtom
        },
        props: {
            itemInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods:{
            /*点击按钮勾选和不勾选商品*/
            ischecket(){
                this.itemInfo.check = !this.itemInfo.check
            }
        }
    }
</script>

<style scoped>
  #shop-item {
    width: 92%;
    display: flex;
    padding: 0.2rem;
    border-radius: 0.24rem;
    border: 2px solid #02C3D2;
    margin: 0.32rem 0.32rem 0.32rem 0.32rem;
    background: #ffffff;
    position: relative;
    z-index: 400;
  }

  .item-title, .item-desc {
    margin-top: 0.24rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.66rem;
    font-weight:600;
  }
  .item-img {
    padding: 0.2rem;
  }
  .item-img img {
    width: 3.2rem;
    height: 4rem;
    display: block;
    border-radius: 0.2rem;
  }

  .item-info {
    font-size: 0.68rem;
    color: #333;
    padding: .1rem 0.4rem;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 0.56rem;
    color: #02C3D2;
    margin-top: 0.6rem;
  }

  .info-bottom {
    margin-top: 0.4rem;
    position: absolute;
    bottom: 0.4rem;
    left: 0.4rem;
    right: 0.4rem;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .item-price{
    position: absolute;
    bottom:0.06rem ;
    font-weight: bold;
  }
  .item-count {
    position: absolute;
    right: 0.24rem;
    bottom: 0.01rem;
    color: #02C3D2;
  }
  .item-selector{
    position: relative;
    margin-top: 1.44rem;
  }
</style>
