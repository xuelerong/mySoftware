<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodList",
        components:{
            GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 0.2rem;
  }
</style>