<template>
  <div>
    <!--导航栏-->
    <navigation class="music-nav">
      <div class="leftpic" slot="left"><img src="../../assets/img/userpic/左箭头.png" @click="torepalce" alt=""></div>
      <div class="centerM" slot="center">{{messageMname}}</div>
      <!--绑定点击事件点击toast提示-->
      <div slot="right" class="rightPoint" @click="Moff"><img src="../../assets/img/userpic/省略号.png" alt=""></div>
    </navigation>
    <!--搜多框-->
    <div class="search"><img src="../../assets/img/music/搜索.png" alt=""/></div>
    <input type="text" placeholder="lookup" class="inputMusic"/>

    <!--滚动区域-->
    <scroll class="content" ref="scroll" @scroll="scroll" :bsheight="3">
      <!--歌曲-->
      <div class="M-heard">
        <div class="music-top" v-for="(item,index) in myMusic" :key="index" @click="messageM(item)">
          <audio ref="audio" class="audio" loop :src="item.music">
            <!--用来让点击左右按钮获取对应歌曲名-->
            <div v-show="false">{{item.title}}</div>
          </audio>
          <!--显示每首歌曲的索引-->
          <div class="index">{{index+1}}</div>
          <!--图标-->
          <div class="m-fuhao"><img src="../../assets/img/music/加号.png" alt=""></div>
          <div class="M-name" @click="startMessage(index)">{{item.title}}</div>
          <div class="M-right"><img src="../../assets/img/music/播放图标.png" alt=""></div>
          <div class="M-left"><img src="../../assets/img/music/dis.png" alt=""></div>
        </div>
      </div>
    </scroll>

    <div class="music-Down" v-show="inlineNotm">
      <div @click="pointstopMusic " v-show="botmPic"><img src="../../assets/img/music/暂停.png" alt=""></div>
      <div @click="pointstopMusicL" v-show="botmPicL"><img src="../../assets/img/music/开始.png" alt=""></div>
      <div class="leftArrow" @click="leftArrow"><img src="../../assets/img/music/右箭头.png" alt=""></div>
      <div class="rightArrow" @click="rightArrow"><img src="../../assets/img/music/左箭头.png" alt=""></div>
      <div class="leftLoop"><img src="../../assets/img/music/循环.png" alt=""></div>
      <div class="moreArrow" @click="moreArrow"><img src="../../assets/img/music/三横线.png" alt=""></div>
    </div>
    <back-top @click.native="topMusic" v-show="musicTop"/>
  </div>
</template>

<script>
    import Navigation from "../../components/navigation/Navigation";
    import Scroll from "../../components/scroll/Scroll";
    import BackTop from "../../components/backTop/BackTop";

    export default {
        name: "Music",
        components: {
            Navigation,
            Scroll,
            BackTop
        },
        data() {
            return {
                /*歌曲*/
                myMusic: [
                    {
                        music: require('../../assets/Music/封茗囧菌 - 当你.mp3'),
                        title: '封茗囧菌 - 当你'
                    },
                    {
                        music: require('../../assets/Music/薛之谦 - 下雨了.mp3'),
                        title: '薛之谦 - 下雨了'
                    },
                    {
                        music: require('../../assets/Music/辛馨 - 虹之间.mp3'),
                        title: '辛馨 - 虹之间'
                    },
                    {
                        music: require('../../assets/Music/G.E.M.邓紫棋 - 倒数 (Live).mp3'),
                        title: 'G.E.M.邓紫棋 - 倒数 (Live)'
                    },
                    {
                        music: require('../../assets/Music/G.E.M.邓紫棋、黄明志 - 飘向北方 (Live).mp3'),
                        title: 'G.E.M.邓紫棋、黄明志 - 飘向北方 (Live)'
                    },
                    {
                        music: require('../../assets/Music/Musicsum - 말해 뭐해 (说说看吧).mp3'),
                        title: 'Musicsum - 말해 뭐해 (说说看吧)'
                    },
                    {
                        music: require('../../assets/Music/伦桑 - 甜甜的.mp3'),
                        title: '伦桑 - 甜甜的'
                    },
                    {
                        music: require('../../assets/Music/华语群星 - 真心英雄.mp3'),
                        title: '华语群星 - 真心英雄'
                    },
                    {
                        music: require('../../assets/Music/南京外国语学校高三六班 - 北京东路的日子.mp3'),
                        title: '南京外国语学校高三六班 - 北京东路的日子'
                    },
                    {
                        music: require('../../assets/Music/双笙 - 心做し (无心).mp3'),
                        title: '双笙 - 心做し (无心)'
                    },
                    {
                        music: require('../../assets/Music/后弦 - 素贞.mp3'),
                        title: '后弦 - 素贞'
                    },
                    {
                        music: require('../../assets/Music/夏婉安 - 入戏太深.mp3'),
                        title: '夏婉安 - 入戏太深'
                    },
                    {
                        music: require('../../assets/Music/大柯 - 说爱你.mp3'),
                        title: '大柯 - 说爱你'
                    },
                    {
                        music: require('../../assets/Music/封茗囧菌 - 爱的魔法.mp3'),
                        title: '封茗囧菌 - 爱的魔法'
                    },
                    {
                        music: require('../../assets/Music/昼夜 - 千与千寻 (钢琴版).mp3'),
                        title: '昼夜 - 千与千寻 (钢琴版)'
                    },
                    {
                        music: require('../../assets/Music/汪苏泷 - 万有引力.mp3'),
                        title: '汪苏泷 - 万有引力'
                    },
                    {
                        music: require('../../assets/Music/汪苏泷 - 不分手的恋爱.mp3'),
                        title: '汪苏泷 - 不分手的恋爱'
                    },
                    {
                        music: require('../../assets/Music/汪苏泷、By2 - 有点甜.mp3'),
                        title: '汪苏泷、By2 - 有点甜'
                    },
                    {
                        music: require('../../assets/Music/汪苏泷、薛之谦 - 违背的青春 (Live).mp3'),
                        title: '汪苏泷、薛之谦 - 违背的青春 (Live)'
                    },
                    {
                        music: require('../../assets/Music/纯音乐 - 遇见 (钢琴).mp3'),
                        title: '纯音乐 - 遇见 (钢琴)'
                    },
                    {
                        music: require('../../assets/Music/胡歌、白冰 - 美丽的神话.mp3'),
                        title: '胡歌、白冰 - 美丽的神话'
                    },
                    {
                        music: require('../../assets/Music/薛之谦 - 演员.mp3'),
                        title: '薛之谦 - 演员'
                    },
                    {
                        music: require('../../assets/Music/许嵩 - 你若成风.mp3'),
                        title: '许嵩 - 你若成风'
                    },
                    {
                        music: require('../../assets/Music/许嵩 - 安徒生不后悔.mp3'),
                        title: '许嵩 - 安徒生不后悔'
                    },
                    {
                        music: require('../../assets/Music/许嵩 - 有何不可.mp3'),
                        title: '许嵩 - 有何不可'
                    },
                    {
                        music: require('../../assets/Music/许嵩 - 灰色头像.mp3'),
                        title: '许嵩 - 灰色头像'
                    },
                    {
                        music: require('../../assets/Music/锦零 - 九张机.mp3'),
                        title: '锦零 - 九张机'
                    },
                    {
                        music: require('../../assets/Music/雷雨心、RAiNBOW计划 - 记念.mp3'),
                        title: '雷雨心、RAiNBOW计划 - 记念'
                    }, {
                        music: require('../../assets/Music/高橋優 - ヤキモチ (吃醋).mp3'),
                        title: '高橋優 - ヤキモチ (吃醋)'
                    }, {
                        music: require('../../assets/Music/麓七 - 烟火.mp3'),
                        title: '麓七 - 烟火'
                    },
                    {
                        music: require('../../assets/Music/黑崎子 - PLANET (行星).mp3'),
                        title: '黑崎子 - PLANET (行星)'
                    },
                    {
                        music: require('../../assets/Music/黑崎子 - 非酋.mp3'),
                        title: '黑崎子 - 非酋'
                    }
                ],
                /*导航栏歌曲名*/
                messageMname: 'Music',
                /*音乐底部组件的显示与隐藏*/
                inlineNotm: false,
                /*底部音乐图标的显示隐藏*/
                botmPic: false,
                botmPicL: true,
                /*储存当前播放歌曲的索引*/
                currindex: 0,
                /*回到顶部按钮*/
                musicTop: false,
            }
        },
        methods: {
            /*点击歌曲在导航栏显示对应歌曲名*/
            messageM(item) {
                this.messageMname = item.title;
                /*控制音乐底部组件的显示与隐藏*/
                this.inlineNotm = true
                console.log(item.title)
            },
            /*定义一个函数让每个歌曲都默认不播放*/
            stopMusic() {
                for (let i in this.myMusic) {
                    this.$refs.audio[i].pause();
                }
            },
            /*拿到当前点击歌曲的索引位置*/
            startMessage(index) {
                /*每次点击调用stopMusic清空上一首音乐播放*/
                this.stopMusic();
                /*根据索引播放当前点击的音乐*/
                this.$refs.audio[index].play();
                /*底部暂停播放按钮显示隐藏取反*/
                this.botmPic = false;
                this.botmPicL = true;
                /*定时底部暂停播放按钮显示隐藏取反*/
                setTimeout(() => {
                    this.botmPic = true;
                    this.botmPicL = false;
                }, 500);
                /*把当前选中的索引保存到currindex中*/
                this.currindex = index
            },
            /*点击提示*/
            Moff() {
                this.$toast({
                    message: '该功能暂未开放',
                });
            },
            /*点击提示*/
            moreArrow() {
                this.$toast({
                    message: '该功能暂未开放',
                });
            },
            /*点击返回主页*/
            torepalce() {
                this.$router.replace('/home')
                this.inlineNotm = false
            },
            /*点击控制当前音乐暂停播放*/
            pointstopMusic() {
                this.$refs.audio[this.currindex].pause();
                /*暂停播放按钮显示隐藏取反*/
                this.botmPic = false;
                this.botmPicL = true;
            },
            /*点击控制当前音乐播放*/
            pointstopMusicL() {
                this.$refs.audio[this.currindex].play();
                /*暂停播放按钮显示隐藏取反*/
                this.botmPic = true;
                this.botmPicL = false;
            },
            /*点击切换上一首*/
            leftArrow() {
                /*每次点击调用stopMusic清空上一首音乐播放*/
                this.stopMusic();
                /*判断当当前歌曲的索引是最后以为点击上一首回到最后一首音乐*/
                if (this.currindex === 0) {
                    this.currindex = this.myMusic.length
                }
                this.$refs.audio[this.currindex -= 1].play();
                /*拿到audio下面的歌曲名称显示到导航栏中*/
                this.messageMname = this.$refs.audio[this.currindex].innerText
                console.log(this.$refs.audio[this.currindex].innerText)
                /*暂停播放按钮显示隐藏取反*/
                this.botmPic = false;
                this.botmPicL = true;
                setTimeout(() => {
                    /*定时暂停播放按钮显示隐藏取反*/
                    this.botmPic = true;
                    this.botmPicL = false;
                }, 500);
            },
            /*点击切换下一首*/
            rightArrow() {
                /*每次点击调用stopMusic清空上一首音乐播放*/
                this.stopMusic();
                /*判断当当前歌曲的索引是最后以为点击下一首回到第一首音乐*/
                if (this.currindex === this.myMusic.length - 1) {
                    this.currindex = -1
                }
                this.$refs.audio[this.currindex += 1].play();
                /*拿到audio下面的歌曲名称显示到导航栏中*/
                this.messageMname = this.$refs.audio[this.currindex].innerText
                /*定时暂停播放按钮显示隐藏取反*/
                this.botmPic = false;
                this.botmPicL = true;
                setTimeout(() => {
                    /*定时暂停播放按钮显示隐藏取反*/
                    this.botmPic = true;
                    this.botmPicL = false;
                }, 500);
            },
            /*点击回到顶部按钮*/
            topMusic() {
                this.$refs.scroll.scroll.scrollTo(0, 0, 400)
            },
            /*当滚动高度大于400显示回到顶部按钮*/
            scroll(options) {
                this.musicTop = -(options.y) > 400
            }
        }
    }
</script>

<style scoped>
  .music-Down {
    z-index: 4000;
    position: fixed;
    background-color: rgb(103, 219, 228);
    width: 100vw;
    height: 2rem;
    bottom: 0;
  }

  .music-Down img {
    left: 7rem;
    text-align: center;
    margin-top: 0.34rem;
    position: absolute;
    width: 1.36rem;
    height: 1.36rem;
  }

  .leftpic {
    padding-top: 0.24rem;
  }

  .leftpic img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .rightPoint {
    line-height: 2.25rem;
    margin-right: 0.8rem;
  }

  .rightPoint img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .music-nav {
    color: #f6f6f6;
    background-color: #02C3D2;
    z-index: 100;
  }

  .M-heard {
    margin-top: 1.6rem;
  }

  .music-top {
    color: #f6f6f6;
    line-height: 2.2rem;
    font-size: 0.62rem;
    width: 100vw;
    background-color: #02C3D2;
    height: 2.2rem;
  }

  .M-name {
    width: 7rem;
    margin-left: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-fuhao {
    margin-top: 0.12rem;
    margin-left: 2rem;
    position: absolute;
  }

  .m-fuhao img {
    border: 1px solid #f6f6f6;
    padding: 0.08rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.2rem;
  }

  .M-right img {
    margin-top: -1.28rem;
    right: 2.4rem;
    position: absolute;
    width: 0.64rem;
    height: 0.64rem;
  }

  .search {
    z-index: 60000;
    margin-top: 1.8rem;
    margin-left: 1rem;
    position: fixed;
  }

  .search img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .leftArrow img {
    left: 4rem;
    margin-top: 0.4rem;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
  }

  .rightArrow img {
    left: 10rem;
    margin-top: 0.4rem;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
  }

  .leftLoop img {
    left: 1rem;
    margin-top: 0.3rem;
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
  }

  .inputMusic {
    height: 1.4rem;
    box-sizing: border-box;
    width: 100vw;
    z-index: 5000;
    position: fixed;
    margin-top: 1.6rem;
    background-color: #02C3D2;
    border: 1px solid #02C3D2;
    color: #ffffff;
    font-size: 0.56rem;
    padding-left: 2.3rem;
    box-shadow: 0 1px 0.4rem #ffffff;
  }

  input:focus {
    border: 0.08rem solid #ffffff;
    box-shadow: 0 0.08rem 0.4rem #ffffff;
    background-color: rgb(103, 219, 228);
  }

  .moreArrow img {
    left: 12.6rem;
    margin-top: 0.4rem;
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
  }

  .M-left img {
    margin-top: -1.28rem;
    right: 0.8rem;
    position: absolute;
    width: 0.64rem;
    height: 0.64rem;
  }

  .index {
    margin-left: 0.56rem;
    position: absolute;
  }

  .content {
    top: 3rem;
    bottom: 2rem;
    position: absolute;
  }

  .centerM {
    width: 11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>