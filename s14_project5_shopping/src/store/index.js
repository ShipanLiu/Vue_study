// store 这个 folder is for storing all data of our product

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  // 就是数据, 单向的:  State -> View -> Action -> State,  View 里面的 changes 不能改变 State 里面的changes
  state: {
    // all products
    products: [],
    // shopping basket
    productsInBag: [],
  },

  // You can think of getters as computed properties for the store's state,
  // 可以看成 getter 就是 state的 进一步细化，state 一变， getter 就会也变， 相当于 computed
  getters: {
    //if anything in the productsInBag array changes, the computed value of basketLength (as you've defined it in the getters) will be re-evaluated, and its value will update accordingly.
    basketLength: (state) => {
      // here use reduce() or forEach() better than filter(), becuase filter() returns a new array, which we don't need here
      return state.productsInBag.reduce((itemSum, pro) => {
        itemSum += pro.quantity
        return itemSum;
      }, 0);
    },
  },

  // calling a "mutation" outside you need to use "commit()"
  mutations: {
    loadProducts(state, pro) {
      // 这里的state，就是上面的 state
      state.products = pro;
    },

    //第一个参数永远是 state
    addToBag(state, pro) {
      state.productsInBag.push(pro);
    },

    removeProductsInBag(state, proId) {
      state.productsInBag = state.productsInBag.filter(item => item.id != proId);
    },
  },

  // calling an "action" outside you need to use "dispatch()"
  actions: {
    // API data ====save to ===>  store  need "action" + "mutation"
    // the commit param is for invoking the "mutation"
    loadProducts({ commit }) {
      axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        // console.log(res.data)
        // the "mutation" better has the same name as "action"
        commit('loadProducts', res.data);
      })
    },

    // add to Basket action(参数 "pro" 传进来了)
    addToBag({ commit}, pro) {
      commit("addToBag", pro); // 把任务交给 mutation "addToBag"
    },

    removeProductsInBag({ commit }, proId) {
      // 注意 alter action 最好在 store 里面写
      if(confirm("are you sure you want to remove the item from basket")) {
        commit("removeProductsInBag", proId);
      } else {
        alert("item satys in basket, 又花钱了");
      }
    },


  },
  modules: {
  }
})
