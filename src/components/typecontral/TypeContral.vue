<template>
  <div class="typecontral">
    <div v-for="(item,index) in contitle" :class="{active: index === currentIndex}" :key="index"
         @click="ontype(index)" class="typecontral-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TypeContral",
        props:{
            contitle:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            ontype(index){
                this.currentIndex = index;
                this.$emit('curryindex',index)
                console.log(index)
            }
        }
    }
</script>

<style scoped>
  .typecontral {
    width: 97%;
    margin-top: -0.2rem;
    display: flex;
    text-align: center;
    font-size: 0.55rem;
    height: 1.2rem;
    line-height: 0.9rem;
    background-color: #ffffff;
    z-index: 10;
    padding-top:0.3rem ;
    margin-left: 0.24rem;
  }
  .typecontral-item {
    flex: 1;
  }
  .typecontral-item span {
    padding: 0.1rem;
  }
  .active {
    color:#02C3D2;
  }
  .active span {
    border-bottom:0.06rem solid #02C3D2;
  }
</style>