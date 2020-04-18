<template>
  <scroll class="content">
  <div class="vanSidebar">
    <ul class="Sidebar" :class="{active:activeKey === index}" @click="onChange(index)"
                 v-for="(item,index) in categories" :key="index">
      <li>{{item.title}}</li>
    </ul>
  </div>
  </scroll>

</template>

<script>
  import Scroll from "../../../components/scroll/Scroll";
    export default {
        name: "Sidebar",
        components:{
            Scroll
        },
        props:{
            categories:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
                /*默认选中第一个按钮*/
                activeKey: 0
            }
        },
        methods: {
            /*选中按钮改变activeKey的值*/
            onChange(index) {
                this.activeKey = index;
                console.log(index)
                this.$emit('sodearIndex', index)
            }
        }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .content {
    height: 86.5vh;
    position: fixed;
    top:1.6rem;
    width: 4rem;
  }
  .Sidebar {
    text-align: center;
    padding-top: 0.6rem;
    font-size: 0.6rem;
    height: 1.2rem;
    line-height: .8rem;
    color: #ffffff;
    background-color: #02C3D2;
    list-style: none;
  }
  .active {
    background-color: #fff;
    color: #02C3D2;
  }
</style>