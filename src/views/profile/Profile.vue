<template>
  <div>
    <Navigation class="profile-nav">
      <div class="nav-center" slot="center">我的商城</div>
    </Navigation>
    <div class="message">
      <div><img src="../../assets/img/profil/home.png" alt=""></div>
      <div class="one">用户名: {{this.$store.state.username}}</div>
      <div class="two"><img src="../../assets/img/profil/phone.png" alt="">暂无绑定手机号</div>
      <div class="head"><img src="../../assets/img/profil/right.png"></div>
      <div class="login" @click="toLogin">退出登录</div>
    </div>
    <div class="body">
      <div class="arr">
        <div class="ago">0.00<span>元</span></div>
        <h6>我的余额</h6>
      </div>
      <div class="Discount">
        <div class="ago">0<span>个</span></div>
        <h6>我的盈余</h6>
      </div>
      <div class="integral">
        <div class="ago">0<span>分</span></div>
        <h6>我的积分</h6>
      </div>
    </div>
    <div class="first">
      <div><img src="../../assets/img/profil/xiaoxi.png" alt=""><span>我的消息</span></div>
      <div><img src="../../assets/img/profil/jifen.png" alt=""><span>积分商城</span></div>
      <div><img src="../../assets/img/profil/huiyuan.png" alt=""><span>会员卡</span></div>
    </div>
    <div class="last">
      <div><img src="../../assets/img/profil/gouwu.png" alt=""><span>我的购物车</span></div>
      <div class="lastline"><img src="../../assets/img/profil/app.png" alt=""><span>下载购物APP</span></div>
    </div>
  </div>
</template>

<script>
  import Navigation from "../../components/navigation/Navigation";
    export default {
        name: "Profile",
        components:{
            Navigation
        },
        methods:{
            toLogin(){
                this.$router.replace('/login')
            }
        }
    }
</script>

<style scoped>
  .profile-nav {
    background-color:#02C3D2;
    color: #fff;
  }
  .message {
    width: 100vw;
    background-color: #02C3D2;
    display: table;
    position: relative;
    margin-top: 1.6rem;
  }
  img{
    float: left;
    width: 2.28rem;
    height: 2.28rem;
    margin: 0.96rem 0 0.76rem 0.44rem;
  }
  .one {
    position: absolute;
    left: 3.3rem;
    top: 1.3rem;
    color: #fff;
    font-size: .6rem;
  }
  .two{
    position: absolute;
    left: 2.7rem;
    top: 2.4rem;
    font-size: 0.6rem;
    color: #fff;
  }
  .two img{
    width: 0.8rem;
    height: .9rem;
    margin-top: -0.02rem;
  }
  .head img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.16rem;
    top: 0.7rem;
  }
  .body{
    width: 100vw;
    height: 3.8rem;
    background-color: #fff;
    display: flex;
    font-size: 0.8rem;
    color: #333;

  }
  .body .ago{
    color: #ff8198;
    font-size: 1rem;
  }
  .body span{
    font-size: 0.6rem;
    color: #333;
  }
  .body .arr{
    flex: 1;
    text-align: center;
    padding-top: 1rem;
    line-height: .8rem;
    border-right: 1px solid #f2f2f2;
  }
  .body .Discount{
    flex: 1;
    text-align: center;
    padding-top: 1rem;
    line-height: .8rem;
    border-right: 1px solid #f2f2f2;
  }
  .body .integral{
    flex: 1;
    text-align: center;
    padding-top: 1rem;
    line-height: .8rem;
    border-right: 1px solid #f2f2f2;
  }
  .first{
    width: 100vw;
    border-top: 0.5rem solid #f2f2f2;
    border-bottom: 0.5rem solid #f2f2f2;
    position: relative;
  }
  .first img{
    position: absolute;
    width: .9rem;
    height:.9rem;
    margin-top: 0.4rem;
  }
  .first span{
    display: block;
    height: 1.65rem;
    margin-left: 2.2rem;
    line-height:1.65rem;
    border-bottom: 1px solid #f2f2f2;
    font-weight: bold;
    font-size: 0.6rem;
  }
  .last img{
    position: absolute;
    width: .9rem;
    height:.9rem;
    margin-top: 0.4rem;
  }
  .last span{
    display: block;
    height: 1.65rem;
    margin-left: 2.2rem;
    line-height:1.65rem;
    border-bottom: 1px solid #f2f2f2;
    font-weight: bold;
    font-size: 0.6rem;
  }
  .last .lastline span{
    border-bottom: none;
  }
  h6{
    margin-top: 0;
  }
  .login{
    position: absolute;
    font-weight: bold;
    color: hotpink;
    font-size: 0.8rem;
    right: 0.6rem;
    top: 2.7rem;
  }
</style>