<template>
  <div class="login-loo">
    <div class="tit">Hellow user</div>
    <div class="login-pic">
      <img src="../../assets/kenan.jpeg" alt="">
    </div>
    <van-form>
      <van-field class="userTop"
                 v-model="username"
                 name="用户名"
                 label="用户名 :"
                 placeholder="用户名"
                 :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码 :"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"/>
      <div>
        <van-button class="btnsize" round block type="info" @click="showbtn">
          登录
        </van-button>
        <van-button class="btnsizetwo" round block type="info" @click="desubmit(username,password)">
          创建账号
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
    import {Notify} from 'vant'

    export default {
        name: "Login",

        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            showbtn() {
                if (this.username === this.$store.state.username && this.password === this.$store.state.password) {
                    setTimeout(() => {
                        this.$router.replace('/home')
                    }, 2100);
                    this.$toast.loading({
                        message: '登陆中...',
                        forbidClick: true,
                        loadingType: 'spinner',
                        duration:1500
                    });
                } else {
                    Notify('账号或密码输入错误!');
                }
            },
            desubmit(username, password) {
                if (this.username && this.password !== '') {
                    this.$store.commit('increment', username);
                    this.$store.commit('decrement', password)
                    Notify({type: 'success', message: '账户创建成功,请登录!'});
                } else if (this.username || this.password === '') {
                    Notify({type: 'danger', message: '请输入要注册的账号密码!'});
                }
            },
        }
    }
</script>

<style scoped>
  .tit {
    font-family: 华文行楷;
    padding-left: 0.8rem;
    padding-top: 1.4rem;
    color: #f6f6f6;
    font-size: 1.2rem;
    font-weight: bolder;
  }

  .login-loo {
    position: fixed;
    background-color: skyblue;
    height: 100vh;
    width: 100vw;
    z-index: 500;
  }

  .van-form {
    margin-left: 0.6rem;
    width: 90vw;
    position: absolute;
    margin-top: 9.6rem;
  }

  .van-field {
    border-radius: 0.32rem;
  }

  .userTop {
    margin-bottom: 1rem;
  }

  .van-button {
    right: -3rem;
    margin-top: 0.4rem;
    float: left;
    margin-right: .6rem;
    width: 5rem;
  }

  .btnsizetwo {
    background-color: #f6f6f6;
    color: #333333;
  }

  .login-pic {
    margin-top: 120px;
    height: 5.2rem;
    width: 5.2rem;
    border: 1px solid #eee;
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: 0 0 0.4rem #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }

  .login-pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
</style>