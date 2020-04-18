<template>
  <!-- 通过Object.keys长度判断goods里有无数据   不判断数据依然能够获取，但columns一开始是一个空数组，会不能取到下标 -->
  <div class="base-info" v-if="Object.keys(goods).length !==0">
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="others">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
        <span class="services-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            },
            // shop: {
            //     type: Array,
            //     default: () => {
            //     }
            // }
        },
        methods: {},
        components: {},
    }
</script>

<style scoped>
  .base-info {
    margin-top: 0.4rem;
    padding: 0 0.1rem;
  }

  .title {
    color: #222;
    font-size: 0.64rem;
    font-weight: 600;
  }

  .price {
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }

  .n-price {
    font-size: 0.8rem;
    color: #02C3D2;
  }

  .o-price {
    font-size: 0.5rem;
    margin-left: 0.3rem;
    /*数字上话横线*/
    text-decoration: line-through;
  }

  .discount {
    font-size: 0.8rem;
    margin-left: 0.3rem;
    color: #fff;
    background-color: #02C3D2;
    border-radius: 0.3rem;
    /* 使元素上浮，使用相对定位*/
    position: relative;
    top: -0.26rem;
  }

  .others {
    display: flex;
    justify-content: space-around;
    font-size: 0.4rem;
    margin-top: 0.6rem;
    margin-left: -0.4rem;
    border-bottom: 0.02rem solid #e6e6e6;
    padding-bottom: 0.3rem;
    color: #02C3D2;
  }

  .shop img {
    height: 0.8rem;
  }

  .services {
    display: flex;
    justify-content: space-around;
    line-height: 2.2rem;
    margin-bottom: 0.52rem;
    border-bottom: 0.16rem solid #e6e6e6;
  }

  .services-item img {
    height: 0.4rem;
    width: 0.4rem;
    position: relative;
    top: 0.1rem;
  }

  .services-item span {
    font-size: 0.46rem;
  }
</style>
