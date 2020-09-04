<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,i) in detailInfo.detailImage[0].list" :key="i" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        props: {
            detailInfo: {
                type: Object,
                default: () => {
                }
            }
        },
        methods: {
            imgLoad() {
                this.$emit('goodsImgLoad')
            }
        },
        components: {},
    }
</script>

<style scoped>
  .goods-info {
    padding: 0.8rem 0 2.6rem;
    border-bottom: 0.2rem solid #f2f5f8;
  }

  .info-desc {
    padding: 0 0.6rem;
  }

  .start, .end {
    width: 3.6rem;
    height: 0.04rem;
    background-color: #a3a3a5;
    position: relative;
  }

  .start {
    float: left;
  }

  .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .desc {
    padding: 0.6rem 0;
    font-size: 0.56rem;
  }

  .info-key {
    margin: 0.4rem 0 0.4rem 0.6rem;
    color: #333;
    font-size: 0.6rem;
  }

  .info-list img {
    border: 0.08rem solid #02C3D2;
    margin-left: 0.2rem;
    width: 96%;
    text-align: center;
  }
</style>
