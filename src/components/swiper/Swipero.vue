<template>
  <div id="rotate">
    <ul id="bodyRotate">
      <li v-for="(item,index) in Picture" :key="index" v-show="index === mack">
        <img :src="item" alt=""/>
      </li>
    </ul>
    <div id='foootRot'>
      <span v-for="(ite,index) in Picture" :class="{active: index === mack}" :key="index"> </span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "rotationChart",
        props:{
            Picture: {
                type:Array,
                default(){
                    return[]
                }
            }
        },
        data() {
            return {
                mack: 0,
            }
        },
        created() {
            this.openPlay()
        },
        methods: {
            play() {
                this.mack++;
                if (this.mack === this.Picture.length) {
                    this.mack = 0
                }
            },
            openPlay() {
                setInterval(this.play, 2500)
            }
        }

    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  #rotate {
    width: 100vw;
    height: 9.8rem;
    background: greenyellow;
    position: relative;
    overflow: hidden;
  }
  #bodyRotate {
    position: absolute;
    list-style: none;
    left: 0;
    float: left;
  }
  #bodyRotate li {
    float: left;
  }
  #bodyRotate li img {
    width: 100vw;

  }
  #foootRot {
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    transform: translate(-50%);
  }
  #foootRot span {
    display: inline-block;
    text-decoration: none;
    margin-right: 0.3rem;
    width: 0.5rem;
    height:  0.5rem;
    border-radius: 100%;
    background: #fff;
  }
  .active {
    background-color: skyblue !important;
  }
</style>