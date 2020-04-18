<template>
  <div>
    <div class="toast" v-show="unshow">{{message}}</div>
  </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            message: {
                type: String,
                default: ''
            },
            unshow: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
  .toast {
    text-align: center;
    width: 6.8rem;
    height: 1.6rem;
    line-height: 1.6rem;
    position: fixed;
    border-radius: 0.8rem;
    background-color: rgba(2, 195, 210, .7);
    transform: translate(-50%, -50%);
    padding: 0.32rem;
    color: #fff;
    left: 50%;
    top: 50%;
    font-size: 0.64rem;
  }
</style>
