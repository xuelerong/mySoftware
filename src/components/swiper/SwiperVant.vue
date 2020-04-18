<template>
  <div class="first">
    <van-swipe :autoplay="2000" :show-indicators="false"  id="bodyRotate" @change="dispaly" >
      <van-swipe-item v-for="(item, index) in Picture" :key="index" class="li"  >
        <img :src="item.image" alt="">
      </van-swipe-item>
    </van-swipe>
    <div id='foootRot'>
      <span v-for="(ite,index) in Picture" :class="{active: index === mack}" :key="index"> </span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "SwiperVant",
        props: {
            Picture: {
                type: Array
            }
        },
        data() {
            return {
                mack: 0,
            }
        },
        methods:{
            dispaly(index){
                this.mack = index
            }
        }
    }
</script>

<style scoped>
  .first{
    position: relative;
  }
  #bodyRotate {
    overflow: hidden;
    width: 100vw;
    height: 7.8rem;

  }

  #bodyRotate .li {
    float: left;
  }

  #bodyRotate .li img {
    width: 100vw;
    height: 7.8rem;
  }
  #foootRot {
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    transform: translate(-50%);
  }
  #foootRot span {
    border-radius: 1rem;
    display: inline-block;
    margin-right: 0.3rem;
    width: 0.7rem;
    height:  0.2rem;
    background: #fff;
  }
  .active {
    background-color: skyblue !important;
  }
</style>