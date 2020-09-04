import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:'米斯特薛',
    password:'52047',
    careList:[]
  },
  /*1.mutations用来修改state中的状态
  * 2.mutations中的每个方法尽可能的完成的事情单一*/
  mutations: {
    increment(state,uname){
      state.username= uname
    },
    decrement(state,upass){
      state.password=upass
    },

    addUpcart(state,payload){
      payload.counter ++
    },
    addDowncart(state,payload){
      payload.counter = 1;
      payload.check = true
      state.careList.push(payload)
    }
  },
  /*actions 可以返回promise*/
  actions: {
    addCart(context, payload) {
      return new Promise(resolve=>{
        /*方法一 查找之前数组中是否有该上商品*/
        // let oldprice =null;
        // for (let item of state.careList) {
        //   if (item.id === payload.id) {
        //     this.oldPrice = item
        //   }
        // }
        /*方法二 查找之前数组中是否有该上商品*/
        let oldprice = context.state.careList.find(item => item.id === payload.id);
        /*判断oldprice*/
        if (oldprice) {
          // oldprice.counter += 1
          context.commit('addUpcart',oldprice)
          resolve('当前商品数量 +1')
        } else {
          context.commit('addDowncart',payload)
          resolve('添加商品成功')
        }
      })
    }
  },
  modules: {}
});
