<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"/></div>
    <div class="center"><slot name="center"/></div>
    <div class="right"><slot name="right"/></div>
  </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 1.6rem;
  text-align: center;
  box-shadow: 0 0.02rem 0.02rem rgba(100,100,100,0.2);
  line-height: 1.6rem;
  font-size: 0.7rem;
  position:fixed;
  left: 0;
  right:0;
  top: 0;
}
  .left,.right{
    width: 2rem;
  }
  .center{
    flex: 1;
  }
</style>