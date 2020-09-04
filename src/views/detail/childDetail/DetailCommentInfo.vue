<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
    <div class="info-header">
      <div class="header-tittle">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"/>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail"></div>
    <p>{{commentInfo.content}}</p>
    <div class="info-other">
      <span class="date">{{commentInfo.created | showData}}</span>
      <span>{{commentInfo.style}}</span>
    </div>

    <div class="info-imgs">
      <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>
import {formatDate} from "../../../common/Utiils";

export default {
  name: '',
  data() {
    return {
    }
  },
  props: {
    commentInfo:{
    type:Object,
    default:()=>{}
   }
  },
  filters:{
    showData(value){
        //将时间戳转为Date()对象
        const date=new Date(value * 1000)
        //将date进行格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
  },
  components: {
  },
}
</script >

<style scoped>

.comment-info{
  padding: 0.1rem 0.24rem 1rem;
  color: #333;
  border-bottom:0.2rem solid #f2f5f8;
  font-size: 0.6rem;
}
.info-header{
    height: 1rem;
    line-height: 1rem;
    border-bottom:0.02rem solid rgba(0,0,0,0.1);
}
.header-tittle{
    float: right;
    margin-right: 0.2rem;
    font-size: 0.26rem;
}
.user img{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
}
.info-user{
    padding: 0.2rem 0 0.1rem;
}
.info-user img{
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
}
.info-user span{
  position: relative;
  font-size: 0.3rem;
  top: -0.3rem;
  margin-left: 0.2rem;
}
.info-detail{
    padding: 0 0.1rem 0.3rem;
}
  .info-detail p{
    font-size: 0.28rem;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other{
    font-size: 0.24rem;
    color: #999;
    margin-top: 0.2rem;
  }
  .info-other .date{
    margin-right: 0.16rem;
  }
  .info-imgs{
    margin-top: 0.2rem;
  }
  .info-imgs img{
    width: 3.4rem;
    height: 3.4rem;
    margin-right: 0.1rem;
  }
 .info-other{
   margin-top: -0.3rem;
 }
</style>
