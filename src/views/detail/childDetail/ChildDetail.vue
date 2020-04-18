<template>
  <div>
    <navigation class="backcolor">
      <div slot="left" class="return-item" @click="backclick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="componets">
        <div v-for="(item,index) in titles" :key="index"
             class="componets-item" :class="{active:index === currentIndex}"
             @click="itemindex(index)">{{item}}
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
    import Navigation from "../../../components/navigation/Navigation";

    export default {
        name: "ChildDetail",
        components: {
            Navigation
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        methods: {
            itemindex(index) {
                this.currentIndex = index;
                this.$emit('tittletim',index)
            },
            backclick() {
                //返回上一层页面
                this.$router.back()
                // this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
  .backcolor {
    background-color: #02C3D2;
    z-index: 20;
  }

  .componets {
    display: flex;
  }

  .componets-item {
    flex: 1;
    font-size: 0.52rem;
  }

  .active {
    color: #ffffff;
  }

  .return-item img {
    padding-top: 0.44rem;
  }
</style>
