<template>
  <div id="home">
    <!--导航栏-->
    <Navigation class="home-nav">
      <div class="nav-center" slot="center">首页</div>
    </Navigation>
    <!--选项卡    复制一个选项卡动态控制显示与隐藏-->
    <type-contral class="floatType-contralone" v-show="disFalse"
                  @curryindex="curryindex"
                  :contitle="['流行','新款','精选']" ref="contralTop2"/>
    <scroll class="content" ref="scroll" :bsheight="3"
            @scroll="scroll" :pullUpLoad="true" @moreMessage="moreMessage ">
      <!--轮播图-->
    <swiper-vant :Picture="banner"/>
      <!--recommend 图片数据-->
      <recommend :recommend="recommed"/>
      <!--疫情数据-->
      <epidemic/>
      <!--选项卡-->
      <type-contral class="floatType-contral"
                    @curryindex="curryindex"
                    :contitle="['流行','新款','精选']" ref="contralTop1"/>
      <!--选项卡请求的数据-->
      <good-list :goods="goodsList[currenIndex].list"/>
    </scroll>
    <!--回到顶部按钮-->
    <back-top @click.native="returnTop" v-show="isshow"/>
  </div>
</template>

<script>
    import Navigation from "../../components/navigation/Navigation";
    import Recommend from "./childHome/recommend/Recommend";
    import Epidemic from "./childHome/epidemic/Epidemic";
    import TypeContral from "../../components/typecontral/TypeContral";
    import GoodList from "../../components/goods/GoodList";
    import Scroll from "../../components/scroll/Scroll";
    import BackTop from "../../components/backTop/BackTop";
    import SwiperVant from "../../components/swiper/SwiperVant";

    export default {
        name: "Home",
        components: {
            Navigation,
            Recommend,
            Epidemic,
            TypeContral,
            GoodList,
            Scroll,
            BackTop,
            SwiperVant
        },
        data() {
            return {
                banner: [],
                recommed: [],
                currenIndex: 'pop',
                /*控制返回顶部图标的显示与隐藏*/
                isshow: false,
                /*选项卡请求的数据*/
                goodsList: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                /*选项卡距离顶部的高度*/
                topOffset: 0,
                /*选项卡的控制和隐藏*/
                disFalse: false,
                /* 保存主页离开的位置*/
                svaeY: 0,
                /*对goods组件的监听做一个保存，用来在跳转到其他页面就销毁事件*/
                itemListener:null
            }
        },
        created() {
            /*请求轮播图数据*/
            this.getSwipper();
            /*请求选项卡流行数据*/
            this.getGoodsList('pop');
            /*请求选项卡新款数据*/
            this.getGoodsList('new');
            /*请求选项卡精选数据*/
            this.getGoodsList('sell');

        },
        mounted() {
            /*监听图片的加载完成*/
            /*对goods组件的监听做一个保存，用来在跳转到其他页面就销毁事件*/
           this.itemListener = this.$bus.$on('morePic', () => {
                /*当图片加载完成以后调用一下bs里面的refresh刷新一下获取可滚动高度*/
                this.$refs.scroll.refresh()
            });
            this.disHeight()
        },
        methods: {
            disHeight() {
                /*获取到typeContral的offsetTop高度*/
                this.$bus.$on('imgHeight', () => {
                    this.topOffset = this.$refs.contralTop1.$el.offsetTop;
                })
            },
            curryindex(index) {
                switch (index) {
                    case 0:
                        this.currenIndex = 'pop';
                        break;
                    case 1:
                        this.currenIndex = 'new';
                        break;
                    case 2:
                        this.currenIndex = 'sell';
                        break
                }
                /*控制两个选项卡的点击同步*/
                this.$refs.contralTop1.currentIndex = index;
                this.$refs.contralTop2.currentIndex = index
            },
            /*点击按钮返回顶部 */
            returnTop() {
                this.$refs.scroll.scroll.scrollTo(0, 0, 400)
            },
            /*监听实时滚动位置,控制返回顶部图标  和  选项卡 的显示与隐藏*/
            scroll(opsition) {
                this.isshow = (-opsition.y) > 800;
                this.disFalse = (-opsition.y) > this.topOffset
            },
            /*上拉加载更多*/
            moreMessage() {
                this.getGoodsList(this.currenIndex);
                /*当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载,可以执行下次数据加载*/
                this.$refs.scroll.scroll.finishPullUp()
            },
            /*网络数据请求*/
            getSwipper() {
                this.$http.get('/home/multidata')
                    .then(res => {
                        this.banner = res.data.data.banner.list;
                        this.recommed = res.data.data.recommend.list;
                        console.log(this.banner)
                    })
            },
            /*获取选项卡数据*/
            getGoodsList(type) {
                const page = this.goodsList[type].page + 1;
                this.$http.get('/home/data', {params: {type, page}})
                    .then(res => {
                        this.goodsList[type].list.push(...res.data.data.list);
                        this.goodsList[type].page += 1
                    })
            }
        },
        /* 让HOME中的内容位置保持不变*/
        activated() {
            this.$refs.scroll.scroll.scrollTo(0, this.svaeY, 0);
            /*  回来时进行一次刷新 refresh()*/
            this.$refs.scroll.refresh()
        },
        /*保存离开时候的位置*/
        deactivated() {
            /*离开当前页面销毁监听事件*/
            // this.$bus.$off('morePic',this.itemListener);
            this.svaeY = this.$refs.scroll.scroll.y;
        }
    }
</script>

<style scoped>
  .home-nav {
    background-color: #02C3D2;
    color: #fff;
    z-index: 10;
  }

  .floatType-contral {
    top: 3.2rem;
  }

  .floatType-contralone {
    position: relative;
    margin-top: 1.6rem;
    z-index: 20;
  }

  .content {
    top: 1.6rem;
    bottom: 2rem;
    position: absolute;
  }
</style>