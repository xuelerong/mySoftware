<template>
    <div class="check-buttom" :class="{check:checket}" >
      <img src="../../../assets/img/duigou/duigou.svg" alt=""/>
    </div>
</template>

<script>
    export default {
        name: "ChenckButtom",
        props:{
            checket:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
.check-buttom{
  border: 2px solid #02C3D2;
  border-radius: 100%;
  background-color: #ffffff;
}
  .check-buttom img{
    width: 1.2rem;
    height: 0.72rem;
  }
  .check{
    background-color: #02C3D2;
  }
</style>
