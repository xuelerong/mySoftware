<template>
  <div class="tarbar-item" @click="unisactive">
    <div v-if="!isactive"><slot name="icon-one"/></div>
    <div v-else><slot name="icon-two"/></div>
    <div :style="activeStyle"><slot name="text"/></div>
  </div>

</template>

<script>
    export default {
        name: "TarbatItem",
        props:{
          path:String,
            activeColor:{
                type:String,
                default:'#02C3D2'
            }
        },
        data(){
            return{
                // isactive:false
            }
        },
        computed:{
            isactive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isactive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            unisactive(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
  .tarbar-item {
    flex: 1;
    text-align: center;
    font-size: 0.44rem;
    margin-bottom: 0.04rem;
    margin-top: 0.02rem;
  }

  img {
    height: 0.88rem;
    width: 0.88rem;
    vertical-align: middle;
    margin-top: 0.2rem;
    margin-bottom: 0.04rem;
  }

</style>