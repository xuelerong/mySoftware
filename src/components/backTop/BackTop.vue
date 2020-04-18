<template>
    <div class="backtop">
      <img src="../../assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
 .backtop {
   position:fixed;
   right: 0.54rem;
   bottom: 2.2rem;
 }
  .backtop img {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f6f6f6;
    border-radius: 50%;
  }
</style>
