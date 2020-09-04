<template>
  <div class="goods-item">
    <!--@load 属性可以监听图片是否加载完成-->
    <img v-lazy="goodsitem.img" @load="morePic" @click="itemclick" alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
    export default {
        name: "RightGoodsListItem",
        props: {
            goodsitem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            /*监听图片加载完*/
            morePic() {
                /*通过事件总线把事件发射出去*/
                this.$bus.$emit('mmorePic')
            },
            itemclick() {
                this.$router.push('/detail/' + this.goodsitem.iid)
            }
        }
    }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 1.6rem;
    position: relative;
    width: 44%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 0.2rem;
    border: 0.08rem dashed #02C3D2;
    margin-left: -0.12rem;
  }

  .goods-info {
    font-size: 0.48rem;
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.12rem;
  }

  .goods-info .price {
    color: #02C3D2;
    margin-right: 0.8rem;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -0.6rem;
    top: -0.04rem;
    width: 0.56rem;
    height: 0.56rem;
    background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>