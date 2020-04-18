<template>
  <div class="inline">
      <Navigation class="message">
        <div slot="left" class="leftpic" @click="tohome"><img src="../../assets/img/userpic/左箭头.png" alt=""></div>
        <div slot="center">实时疫情信息</div>
        <div slot="right" class="rightPoint"><img src="../../assets/img/userpic/省略号.png" alt=""></div>
      </Navigation>
    <scroll class="content">
      <!-- 2.为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div class="title"><h3>全国疫情</h3><h4>{{allData.times}}</h4></div>
      <div class="items">
        <div class="item">
          <h4 class="text">
            现存确诊</h4>
          <span class="text">{{allData.econNum}}</span>
          <h5 class="text">较比昨日<code>{{addData.addecon_new}}</code></h5>
        </div>
        <div class="item">
          <h4 class="text">现存确诊重症</h4>
          <span class="text">{{allData.heconNum}}</span>
          <h5 class="text">较比昨日<code>{{addData.addhecon_new}}</code></h5>
        </div>
        <div class="item">
          <h4 class="text">现存疑似</h4>
          <span class="text">{{allData.sustotal}}</span>
          <h5 class="text">较比昨日<code>{{addData.wjw_addsus_new}}</code></h5>
        </div>
        <div class="item">
          <h4 class="text">累计确诊</h4>
          <span class="text">{{allData.gntotal}}</span>
          <h5 class="text">较比昨日<code>{{addData.addcon_new}}</code></h5>
        </div>
        <div class="item">
          <h4 class="text">累计死亡</h4>
          <span class="text">  {{allData.deathtotal}}</span>
          <h5 class="text">较比昨日<code>{{addData.adddeath_new}}</code></h5>
        </div>
        <div class="item">
          <h4 class="text">累计治愈</h4>
          <span class="text">{{allData.curetotal}}</span>
          <h5 class="text">较比昨日<code>{{addData.addcure_new}}</code></h5>
        </div>
      </div>
      <div ref="mapBox" style="height:400px;margin: 0 auto;padding:0 1.6rem"></div>
    </scroll>
  </div>
</template>

<script>
    import Scroll from "../scroll/Scroll";
    import echarts from 'echarts'
    import "echarts/map/js/china";
    import jsonp from "jsonp";

    import Navigation from "../navigation/Navigation";

    const option = {
        title: {
            text: "新型冠状病毒分布图",
            x: 'right'
        },
        series: [
            {
                type: "map",
                map: "china", //渲染中国地图
                label: {  //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
                    //控制对应地区的汉字
                    show: true,
                    color: '#000000',
                    fontSize: 10
                },
                zoom: 1.2, //控制地图的放大和缩小
                itemStyle: {
                    //控制地图板块的颜色和边框
                    areaColor: "skyblue"
                },
                emphasis: {
                    //控制鼠标滑过之后字体颜色
                    label: {
                        color: "#000000",
                        fontSize: 11
                    },
                    //控制鼠标滑过之后的背景色
                    itemStyle: {
                        areaColor: "skyblue"
                    }
                },

            }
        ],
        visualMap: [  //ECharts 设置地图(map)值变化颜色(visualMap):
            {
                type: "piecewise",
                show: true,
                itemWidth: 20,
                pieces: [
                    //分段
                    {min: 1000},
                    {min: 1000, max: 9999},
                    {min: 100, max: 999},
                    {min: 10, max: 99},
                    {min: 1, max: 9},
                    {min: 0, max: 0}
                ],
                //地图颜色
                inRange: {
                    borderColor: '#2B2B2B',
                    color: ["#FFFFFF", "#4F080E"]
                },
                x: "top",
                y: 'left',
            }
        ],
        tooltip: {
            trugger: "item",
            //提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
            formatter: function (params) {
                // console.log(params) //  现存确诊病例:${params.data.value}<br/>
                return params.data
                    ? `
               ${params.data.name}<br/>
              现存确诊病例:${params.data.existNum}<br/>
              确诊病例:${params.data.totalNum}<br/>
              治愈病例:${params.data.cureNum}<br/>
              死亡病例:${params.data.deathNum}<br/>
                        `
                    : "";
            }
        }
    };
    export default {
        name: "SituationMessage",
        components: {
            Navigation,
            Scroll
        },
        data() {
            return {
                allData: {},
                addData: {}
            }
        },
        methods: {
            getData: function () {
                jsonp(
                    "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
                    {},
                    (err, data) => {
                        // console.log(data);
                        this.allData = data.data
                        if (!err) {
                            let list = data.data.list.map(item => ({
                                name: item.name, //省份名称
                                value: item.value - item.cureNum - item.deathNum, //现存数量 //根据现存渲染
                                cureNum: item.cureNum, //疑似数量
                                deathNum: item.deathNum, //死亡数量
                                existNum: item.value - item.cureNum - item.deathNum, //现存数量
                                totalNum: item.value //确诊人数
                            }));
                            option.series[0].data = list;
                            this.addData = data.data.add_daily
                            console.log(this.addData);
                            this.myChart.setOption(option);
                        }
                    }
                );
            },
            tohome() {
                this.$router.replace('/home')
            }
        },
        mounted() {
            this.getData();
            this.myChart = echarts.init(this.$refs.mapBox);
            this.myChart.setOption(option, (window.onresize = this.myChart.resize));
        },
    }
</script>

<style scoped>
  .inline{
    position: relative;
    z-index: 70;
    height: 100vh;
    background-color: #ffffff;
  }
  .content {
    height: 100vh;
  }

  .message {
    font-size: 0.7rem;
    background-color: skyblue;
    color: #fff;
    z-index: 80;
  }

  .rightPoint {
    line-height: 2.25rem;
    margin-right: 0.8rem;
  }

  .title {
    margin-top: 1.6rem;
    padding-top: 0.01rem;
    padding-bottom: 0.01rem;
    font-size: 0.6rem;
    background-color: skyblue;
    padding-left: 0.3rem;
    color: brown;
  }

  .title h4 {
    margin-top: -0.5rem;
    font-weight: normal;
    padding-left: 0.4rem;
  }

  .items {
    padding-top: 0.4rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    margin-bottom: 20px;
  }

  .item {
    display: flex;
    justify-content: center;
    align-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 3.6rem;
    width: 30vw;
    font-size: 0.34rem;
    text-align: center;
    background-color: white;
  }

  .item .text {
    width: 4rem;
    background-color: white;
  }

  span {
    font-weight: bolder;
    font-size: 1rem;
    margin-bottom: -0.5rem;
  }

  h4 {
    font-weight: bolder;
    color: #b10000;
    margin-top: 0.4rem;
  }

  h5 {
    color: #9999;
    font-family: sans-serif;

  }

  h5 code {
    color: #666;
    background-color: white;
    font-family: sans-serif;
  }

  .items .item:nth-of-type(1) span {
    color: fuchsia;
  }

  .items .item:nth-of-type(2) span {
    color: #8a121c;
  }

  .items .item:nth-of-type(3) span {
    color: #a36fff;
  }

  .items .item:nth-of-type(4) span {
    color: sandybrown;
  }

  .items .item:nth-of-type(5) span {
    color: red;
  }

  .items .item:nth-of-type(6) span {
    color: #13B593;
  }

  .leftpic {
    padding-top: 0.28rem;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
</style>