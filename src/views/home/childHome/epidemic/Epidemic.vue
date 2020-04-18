<template>
  <div class="Esize" @click="getInto">
    <img src="../../../../assets/img/epdmack/Yone.jpg">
  </div>
</template>

<script>
    export default {
        name: "Epidemic",
        methods:{
            getInto(){
                this.$router.replace('/situationMessage')
            }
        }
    }
</script>

<style scoped>
.Esize{
  width: 100vw;
  height: 3.7rem;
  margin-bottom: 0.4rem;
  border-bottom: 0.4rem solid #fff;
}
  .Esize img{
    width: 100vw;
    height: 3.7rem;
    border-radius: 0.6rem;
  }
</style>