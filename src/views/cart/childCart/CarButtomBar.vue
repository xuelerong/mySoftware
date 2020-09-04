<template>
  <div class="buttom-bar">
    <div class="chheck-width">
      <chenck-buttom class="chenckSll"
                     :checket="checket"
                     @click.native="click"/>
      <span>全选</span>
    </div>
    <div class="tot">
      合计: {{totalPrice}}
    </div>
    <div class="qujisuan" @click="inlinePurchase">
      去计算: {{checkLenght}}
    </div>
  </div>
</template>

<script>
    import ChenckButtom from "./ChenckButtom";
    import {Toast} from "vant";

    export default {
        name: "CarButtomBar",
        components: {
            ChenckButtom
        },
        computed: {
            /*计算选中商品的总价格*/
            totalPrice() {
                return '￥' + this.$store.state.careList.filter(item => {
                    return item.check
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.counter
                }, 0).toFixed(2)
                /*toFixed(2)价格后面加两个小数*/
            },
            /*显示选中的数量*/
            checkLenght() {
                return this.$store.state.careList.filter(item => {
                        return item.check
                    }
                ).length
            },
            /*判断是否有一个商品不选中，全选按钮就是不选中，反之，全选按钮选中*/
            /*判断-如果item.check有不被选中的（!item.check）那么他们的length取反就为false
             [number有值取反为false] 就不显示全选   还有一直情况如果没有商品全选按钮显示*/
            checket() {
                if (this.$store.state.careList.length === 0) return false
                // 方法1
                // return !(this.$store.state.careList.filter(item => {
                //     return !item.check
                // }).length)
                // 方法2提升性能
                return !this.$store.state.careList.find(item =>!item.check)
            }
        },
        methods:{
        /*点击底部导航栏全选按钮*/
            click(){
                /*//全部选中的请况*/
                if(this.checket){
                    this.$store.state.careList.forEach(item =>{
                        item.check = false
                    })
                }else {
                    /*全部未选中或部分未选中*/
                    this.$store.state.careList.forEach(item =>{
                        item.check = true
                    })
                }
            },
            inlinePurchase(){
                Toast('该功能暂未开放');
                console.log('dffd')
            }
        }
    }
</script>

<style scoped>
  .buttom-bar {
    height: 1.6rem;
    background-color: rgb(135, 206, 235);
    width: 100vw;
    line-height: 1.6rem;
    display: flex;
    font-size: 0.56rem;
    position: fixed;
    bottom: 2rem;
  }

  .chenckSll {
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-right: 0.16rem;
  }

  .chheck-width {
    display: flex;
    align-items: center;
    margin-left: 0.4rem;
  }

  .tot {
    margin-left: 0.8rem;
  }

  .qujisuan {
    padding-left: 0.2rem;
    width: 3.6rem;
    position: absolute;
    right: 0;
    background-color: #02C3D2;
    color: #333333;
  }
</style>
