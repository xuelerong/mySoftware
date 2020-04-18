<template>
  <div class="shop">
    <div class="logo">
        <img :src="shop.shopLogo" alt="">
        <span>{{shop.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-item middle-left">
        <div class="sells">
          <div class="sells-count">{{shop.cSells | countFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods">
          <div class="goods-count">{{shop.cGoods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item middle-right">
        <div >
          <table>
            <tr v-for="(item,i) in shop.score" :key="i">
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
              <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter ? '高':'低' }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  props:{
    shop:{
        type:Object,
        default(){
          return {}
        }
    }
  },
  filters:{
    countFilter(value){
      if(value<1000) return value;
      return (value/10000).toFixed(1)+'万'
    }
  },
  methods: {
  },
  components: {
  },
}
</script >

<style scoped>
.logo{
  margin-left: 0.6rem;
  display: flex;
  align-items: center;
}
.logo img{
    height: 2.4rem;
    width: 2.4rem;
   border-radius: 100%;
   border: 0.04rem solid rgba(0, 0, 0, .1);
}
.logo span{
  margin-left: 0.6rem;
  font-size: 0.8rem;
}
.middle{
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid #e6e6e6;
}
.middle-item{
  flex: 1;
}
.middle-left{
  color: #333;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-right: 0.04rem solid rgba(0, 0, 0, .1);
}

.sells-count, .goods-count{
  font-size: 0.92rem;
}
.sells-text, .goods-text{
  font-size: 0.6rem;
  color: #000;
  margin-top: 0.4rem;
}
.middle-right{
  color: #333;
  font-size: 0.6rem;
}
.middle-right table{
  width: 6rem;
  margin-left: 1.2rem;
  text-align: center;
}
.middle-right table td{
  padding: 0.2rem 0;
}
.score{
  color: #5ea732;
}
.score-better{
  color: #f13e3a;
}
.better{
  background-color: #5ea732;
  color: #fff;
}
.better-more{
  background: #f13e3a;
  color: #fff;
}

</style>
