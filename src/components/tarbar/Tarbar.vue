<template>
  <div class="tabbar">
    <slot/>
  </div>
</template>

<script>
    export default {
        name: "Tarbar"
    }
</script>

<style scoped>
  .tabbar{
    z-index: 50;
    display: flex;
    height: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -0.02rem 0.02rem rgba(100,100,100,0.2);
  }
</style>