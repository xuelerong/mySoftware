<template>
  <div class="goods">
    <RightGoodsListItem v-for="(item,index) in rightListBom" :key="index" :goodsitem="item"/>
  </div>
</template>


<script>
   import RightGoodsListItem from "./RightGoodsListItem";
    export default {
        name: "RightGoodsList",
        components:{
            RightGoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            },
            rightListBom:{
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