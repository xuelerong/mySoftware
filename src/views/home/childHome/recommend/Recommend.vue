<template>
  <div class="recommed">
    <div v-for="(item,index) in recommend" :key="index" class="recommed-item">
      <img :src="item.image" alt="" @load="imgHeight">
      <div class="fontsize">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Recommend",
        data(){
          return{
              offDisplay:false
          }
        },
        props:{
            recommend:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        methods:{
            imgHeight(){
                /*做个判断只打印一次图片高度*/
                if(!this.offDisplay){
                    this.$bus.$emit('imgHeight');
                    this.offDisplay = true
                }

            }
        }
    }
</script>

<style scoped>
.recommed{
  width: 100vw;
  display: flex;
  font-size: 0.5rem;
  text-align: center;
  margin-top: 0.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.36rem solid #fff;
}
  .recommed-item{
    flex: 1;
  }
  .recommed-item img{
    width: 3.3rem;
    height: 3.3rem;
  }
  .fontsize{
    margin-top: 0.3rem;
  }
</style>