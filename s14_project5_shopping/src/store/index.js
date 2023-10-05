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

  // calling a "mutation" outside you need to use "commit()"
  mutations: {
    loadProducts(state, pro) {
      // 这里的state，就是上面的 state
      state.products = pro;
    },

    //第一个参数永远是 state
    addToBag(state, pro) {
      state.productsInBag.push(pro);
    }
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
    }

  },
  modules: {
  }
})
