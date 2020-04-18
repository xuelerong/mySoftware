<template>
  <div>
    <!--导航栏-->
    <Navigation class="profile-nav">
      <div class="nav-center" slot="center">我的分类</div>
    </Navigation>

      <!--侧边栏区域-->
      <sidebar @sodearIndex="sodearIndex" :categories="categories" />
      <!--右侧主体区域-->
      <sidebaar-item :SidebarList="SidebarList"
                     :rightListBom="rightListBom"
                     :rightTypecuntry="['综合','新品','销量']"
                     @rightCuntry="rightCuntry"
                      @islink="islink"/>
    <back-top @click.native="returnTop" v-show="isshow"/>
  </div>
</template>

<script>

    import Navigation from "../../components/navigation/Navigation";
    import SidebaarItem from "./childCategory/SidebaarItem";
    import Sidebar from "./childCategory/Sidebar";
    import BackTop from "../../components/backTop/BackTop";

    export default {
        name: "Category",
        components: {
            Navigation,
            Sidebar,
            SidebaarItem,
            BackTop
        },
        data() {
            return {
                /*侧边栏数据*/
                categories: [],
                /*右侧数据*/
                SidebarList: [],
                maitKey: 3627,
                /*右侧底部选项卡数据*/
                rightListBom: [],
                miniWallkey: 10062603,
                /*右侧底部选项卡的类型*/
                rightType: 'pop',
                /*回到顶部图标显示隐藏*/
                isshow:null
            }
        },
        created() {
            /*获取侧边栏数据*/
            this.getCategory();
            /*获取右侧边栏数据*/
            this.tCategory();
            /*获取右边栏底部的选项卡数据*/
            this.righttCategory()
        },
        methods: {
            /*接受子组件发射出来的事件*/
            sodearIndex(index) {
                /*循环给点击的按钮赋值*/
                switch (index) {
                    case 0:
                        this.maitKey = 3627;
                        this.miniWallkey = 10062603;
                        break;
                    case 1:
                        this.maitKey = 582;
                        this.miniWallkey = 50003;
                        break;
                    case 2:
                        this.maitKey = 596;
                        this.miniWallkey = 50005;
                        break;
                    case 3:
                        this.maitKey = 595;
                        this.miniWallkey = 50004;
                        break;
                    case 4:
                        this.maitKey = 598;
                        this.miniWallkey = 50006;
                        break;
                    case 5:
                        this.maitKey = 597;
                        this.miniWallkey = 50532;
                        break;
                    case 6:
                        this.maitKey = 599;
                        this.miniWallkey = 51716;
                        break;
                    case 7:
                        this.maitKey = 600;
                        this.miniWallkey = 50675;
                        break;
                    case 8:
                        this.maitKey = 5253;
                        this.miniWallkey = 10056587;
                        break;
                    case 9:
                        this.maitKey = 609;
                        this.miniWallkey = 50797;
                        break;
                    case 10:
                        this.maitKey = 594;
                        this.miniWallkey = 50010;
                        break;
                    case 11:
                        this.maitKey = 830;
                        this.miniWallkey = 52378;
                        break;
                    case 12:
                        this.maitKey = 602;
                        this.miniWallkey = 10057031;
                        break;
                    case 13:
                        this.maitKey = 606;
                        this.miniWallkey = 10057031;
                        break;
                    case 14:
                        this.maitKey = 603;
                        this.miniWallkey = 20003089;
                        break;
                    case 15:
                        this.maitKey = 605;
                        this.miniWallkey = 52014;
                        break;
                }
                /*点击左侧边栏按钮发送给右边栏当点击的时候回到顶部*/
                this.$bus.$emit('laiveTop')
                /*每当点击左边栏按钮的时候重新获取一下数据*/
                this.tCategory();
                this.righttCategory()
            },
            /* /*接受选项卡组件发射出来的事件*/
            rightCuntry(index) {
                /*循环给rightType赋值*/
                switch (index) {
                    case 0:
                        this.rightType = 'pop';
                        break;
                    case 1:
                        this.rightType = 'new';
                        break;
                    case 2:
                        this.rightType = 'sell';
                        break;
                }
                /*每次点击选项卡获取下数据*/
                this.righttCategory()
            },
            /*点击左侧边栏按钮发送给右边栏当点击回到顶部按钮的时候回到顶部*/
            returnTop(){
                  this.$bus.$emit('topRight')
            },
            /*监听子组件实时传来的滚动位置,控制返回顶部图标显示与隐藏*/
            islink(isshow){
                this.isshow = isshow
            },
            /*获取侧边栏数据*/
            getCategory() {
                this.$http.get('/category')
                    .then(res => {
                        this.categories = res.data.data.category.list;
                    })
            },
            /*获取右边栏数据*/
            tCategory() {
                const meta = this.maitKey;
                this.$http.get('/subcategory', {params: {maitKey: meta}})
                    .then(res => {
                        this.SidebarList = res.data.data.list
                        console.log(this.SidebarList)
                    })
            },
            /*获取右边栏底部的选项卡数据*/
            righttCategory() {
                this.$http.get('/subcategory/detail', {
                    params: {
                        miniWallkey: this.miniWallkey,
                        type: this.rightType
                    }
                }).then(res => {
                    this.rightListBom = res.data
                    console.log(this.rightListBom)
                })
            }
        }
    }
</script>

<style scoped>
  .profile-nav {
    z-index: 20;
    background-color: #02C3D2;
    color: #fff;
  }
</style>