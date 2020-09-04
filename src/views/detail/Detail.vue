<template>
  <div class="detaill">
    <child-detail @tittletim="tittletim" ref="currendes"/>
    <scroll class="content" ref="scroll" @scroll="scroll" :bsheight="3">
      <swipero :Picture="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @goodsImgLoad="goodsImgLoad"/>
      <detail-params :paramInfo="paramInfo" ref="param"/>
      <DetailCommentInfo :commentInfo="commentInfo" ref="commen"/>
      <good-list :goods="recommends" ref="recommen"/>
    </scroll>
    <back-top v-show="isShow" @click.native="listTop"/>
    <detailbuttom @addCart="addCart"/>
    <toast :message="message" :unshow="show"/>
  </div>
</template>

<script>
    import ChildDetail from "./childDetail/ChildDetail";
    import Swipero from "../../components/swiper/Swipero";
    import DetailBaseInfo from "./childDetail/DetailBaseInfo";
    import DetailShopInfo from "./childDetail/DetailShopInfo";
    import {Goods, Shop, GoodsParam} from "./childDetail/detail";
    import {debounce} from "../../common/Utiils";
    import Scroll from "../../components/scroll/Scroll";
    import DetailGoodsInfo from "./childDetail/DetailGoodsInfo";
    import DetailParams from "./childDetail/DetailParams";
    import DetailCommentInfo from "./childDetail/DetailCommentInfo";
    import GoodList from "../../components/goods/GoodList";
    import detailbuttom from "./childDetail/detailbuttom";
    import BackTop from "../../components/backTop/BackTop";
    import Toast from "../../components/toast/Toast";

    export default {
        name: "Detail",
        components: {
            Scroll,
            ChildDetail,
            Swipero,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParams,
            DetailCommentInfo,
            GoodList,
            detailbuttom,
            BackTop,
            Toast
        },
        data() {
            return {
                /*图片id*/
                id: null,
                /*轮播图数据*/
                topImages: [],
                /*轮播图下面的数据*/
                goods: {},
                /*店铺数据*/
                shop: {},
                /*商品详细信息*/
                detailInfo: {},
                /*获取商品参数信息*/
                paramInfo: {},
                /*用户评论信息*/
                commentInfo: {},
                /*请求推荐数据*/
                recommends: [],
                /*顶部导航栏点击切换到对应的位置*/
                seitch: [],
                /*监听滚动位置跳转到对应标题*/
                topCurrendes: [],
                /*回到顶部按钮*/
                isShow: false,
                /*土司的显示隐藏*/
                show: false,
                /*土司的文字内容*/
                message: '',
                getdebance:null
            }
        },
        created() {
            /*获取当前图片的id*/
            this.id = this.$route.params.id;
            this.getDetail();
            this.getDetail();
            this.getCommend();
            this.getdebance = debounce( ()=> {
                /*每次执行时候把seitch数组清空是上一次获取的位置数据*/
                this.seitch = [];
                /*获取每个对应的高度push进去数组中*/
                this.seitch.push(0);
                this.seitch.push(this.$refs.param.$el.offsetTop);
                this.seitch.push(this.$refs.commen.$el.offsetTop);
                this.seitch.push(this.$refs.recommen.$el.offsetTop)
                console.log(this.seitch);
            },500)
        },

        mounted() {
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner',
                duration: 500
            });
        },
        methods: {
            /*根据id请求数据*/
            getDetail() {
                this.$http.get('/detail', {params: {iid: this.id}})
                    .then(res => {
                        console.log(res);
                        /*//获取顶部的图片轮播数据*/
                        this.topImages = res.data.result.itemInfo.topImages;
                        /* 获取轮播图下面的商品信息*/
                        this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)
                        /* 创建店铺对象*/
                        this.shop = new Shop(res.data.result.shopInfo);
                        /*获取商品详细信息*/
                        this.detailInfo = res.data.result.detailInfo;
                        /*获取商品参数信息*/
                        this.paramInfo = new GoodsParam(res.data.result.itemParams.info)
                        /*获取用户评论*/
                        if (res.data.result.rate.cRate !== 0) {
                            this.commentInfo = res.data.result.rate.list[0]
                        }

                    })
            },
            /*请求推荐数据*/
            getCommend() {
                this.$http.get('/recommend')
                    .then(res => {
                        this.recommends = res.data.data.list
                        console.log(res)
                    })
            },
            goodsImgLoad() {
                /*图片加载完刷新一次防止无法滚动*/
                this.$refs.scroll.refresh();
               this.getdebance()
            },
            /*点击标题跳转到对应的内容*/
            tittletim(index) {
                this.$refs.scroll.scroll.scrollTo(0, -this.seitch[index], 400);
                console.log(index)
            },
            /*监听滚动位置跳转到对应标题*/
            scroll(opsition) {
                const positionY = -opsition.y + 2;
                for (let i in this.seitch) {
                    i = parseInt(i)
                    if (this.topCurrendes !== i && (i < this.seitch.length - 1 && positionY >= this.seitch [i] && positionY < this.seitch[i + 1])
                        || (i === this.seitch.length - 1 && positionY >= this.seitch[i])) {
                        this.topCurrendes = i;
                        console.log(this.topCurrendes)
                        this.$refs.currendes.currentIndex = this.topCurrendes
                    }
                }
                /*控制回到顶部按钮显示与隐藏*/
                this.isShow = positionY > 1000
            },
            /*点击按钮回到顶部*/
            listTop() {
                this.$refs.scroll.scroll.scrollTo(0, 0, 400)
            },
            /*点击购物车添加商品*/
            addCart() {
                /*获取购物车展示的商品*/
                const host = {};
                host.image = this.topImages[0];
                host.title = this.goods.title;
                host.desc = this.goods.desc;
                host.price = this.goods.realPrice;
                host.id = this.id;
                /*将商品添加到购物车里*/
                this.$store.dispatch('addCart', host).then(res => {
                    this.message = res;
                    this.show = true;
                    /*三秒后隐藏土司*/
                    setTimeout(() => {
                        this.message = '';
                        this.show = false;
                    }, 3000)
                })
            }
        }

    }
</script>

<style scoped>
  /*盖住底部的tarbar*/
  .detaill {
    background-color: #ffffff;
    z-index: 99;
    position: relative;
    height: 100vh;
  }

  .content {
    top: 1.6rem;
    bottom: 2.3rem;
    position: absolute;
  }
</style>
