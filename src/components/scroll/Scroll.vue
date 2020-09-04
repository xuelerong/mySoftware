<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props:{
            /*动态决定当前组件是否需要实时监听滚动位置*/
          bsheight:{
              type:Number,
              default(){
                  return 0
              }
          },
            /*动态决定当前组件是否需要上拉加载*/
            pullUpLoad:{
                type:Boolean,
                default(){
                    return false
                }
            },
        },
        data(){
            return{
              scroll : null
            }
        },
        mounted() {
            /*创建Bscroll对象*/
            this.scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                /*监听滚动位置*/
                probeType:this.bsheight,
                /*上拉加载更多*/
                pullUpLoad: this.pullUpLoad
            });
            this.scroll.on('scroll',opsition =>{
                this.$emit('scroll',opsition)
            });
            this.scroll.on('pullingUp',() =>{
              this.$emit('moreMessage')
            })
        },
        methods:{
            refresh(){
              this.scroll &&  this.scroll.refresh()
                console.log('ooo')
            }
        }
    }
</script>

<style scoped>
</style>