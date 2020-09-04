<template>
  <scroll class="content" @scroll="scroll" :bsheight="3" ref="scroll">
    <div class="rightHeard">
      <ul v-for="(item,index) in SidebarList" :key="index" class="rightHeard-item">
        <img :src="item.image" alt="">
        <li>{{item.title}}</li>
      </ul>
    </div>
    <type-contral :contitle="rightTypecuntry" @curryindex="curryindex" class="rightCuntry"/>
    <right-goods-list :rightListBom="rightListBom"/>
  </scroll>

</template>

<script>
  import {debounce} from "../../../common/Utiils";
  import Scroll from "../../../components/scroll/Scroll";
    import TypeContral from "../../../components/typecontral/TypeContral";
    import RightGoodsList from "../../../components/rightgoods/RightGoodsList";

    export default {
        name: "SidebaarItem",
        components: {
            Scroll,
            TypeContral,
            RightGoodsList
        },
        props: {
            SidebarList: {
                type: Array,
                default() {
                    return []
                }
            },
            rightTypecuntry: {
                type: Array,
                default() {
                    return []
                }
            },
            rightListBom: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                islink: false,
                /* 保存主页离开的位置*/
                svaeY: 0,
            }
        },
        methods: {
            curryindex(index) {
                this.$emit('rightCuntry', index)
            },
            /*获取滚动高度发射给父组件控制回到顶部图片显示与隐藏*/
            scroll(opsition) {
                const isshow = this.islink;
                this.islink = (-opsition.y) > 800;
                this.$emit('islink', isshow)
            }
        },
        /*  内容位置保持不变*/
        activated() {
            this.$refs.scroll.scroll.scrollTo(0, this.svaeY, 0);
            /*  回来时进行一次刷新 refresh()  否则可能会出现不能滚动的bug*/
            this.$refs.scroll.scroll.refresh()
        },
        /*保存离开时候的位置*/
        deactivated() {
            this.svaeY = this.$refs.scroll.scroll.y;
        },
        mounted() {
            /*接收父组件数据 当点击回到顶部按钮的时候回到顶部*/
            this.$bus.$on('topRight', () => {
                this.$refs.scroll.scroll.scrollTo(0, 0, 400)
            });
            /*监听图片的加载完成*/
            const catdebunce = debounce(this.$refs.scroll.refresh,300)
            this.$bus.$on('mmorePic', () => {
                /*当图片加载完成以后调用一下bs里面的refresh刷新一下获取可滚动高度*/
                catdebunce()
            });
            /*接收父组件数据 当点击的时候回到顶部*/
            this.$bus.$on('laiveTop', () => {
                this.$refs.scroll.scroll.scrollTo(0, 0 )
            });
        }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .rightCuntry {
    margin-top: 0.5rem;
  }
  .content {
    height: 84.5vh;
    position: fixed;
    right: 0;
    top: 2.1rem;
    width: 11rem;
    font-size: 0.4rem;
  }
  .rightHeard {
    text-align: center;
    display: flex;
    flex-wrap: wrap;

  }
  .rightHeard-item {
    width: 33.3%;
  }
  .rightHeard-item img {
    width: 3rem;
    height: 3rem;
  }

  .rightHeard ul {
    list-style: none;
  }
</style>