<template>
  <div v-show="imgShow">
    <div class="heard-words">购物车里啥都没有快去添加吧</div>
    <div class="Img-top">
      <img src="../../../assets/img/cart/cartImg.png" alt="">
    </div>
  </div>

</template>

<script>

    export default {
        name: "ImgCart",
        components: {},
        data() {
            return {
                imgShow: '',
            }
        },
        created() {
            this.getImgShow()
        },
        methods: {
            getImgShow() {
                if (this.$store.state.careList.length === 0) {
                    this.imgShow = true
                } else {
                    this.imgShow = false
                }
            }
        },
        /*进入当前组件*/
        activated() {
            this.getImgShow()
        }
    }
</script>

<style scoped>
  .Img-top {
    position: absolute;
    margin-left: 2.5rem;
    margin-top: 2rem;
  }

  .heard-words {
    margin-top: 6rem;
    font-family: 华文彩云;
    color: #02C3D2;
    text-align: center;
  }

  img {
    width: 9rem;
    height: 8rem;
  }
</style>