<template>
    <div class="cartlist">
       <scroll class="content" ref="scroll">
          <cart-list-item v-for="(item,index) in getLst" :key="index" :itemInfo="item"/>
       </scroll>
    </div>
</template>

<script>
  import Scroll from "../../../components/scroll/Scroll";
  import CartListItem from "./CartListItem";
    export default {
        name: "CartList",
        components:{
            Scroll,
            CartListItem
        },
        computed:{
           getLst(){
               return this.$store.state.careList
           }
        },
        /*进入当前组件*/
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
.cartlist{
  height: 100vh;
}
  .content{
    top: 2rem;
    bottom: 4rem;
    position: absolute;
    width: 100vw;
    overflow: hidden;
  }
</style>
