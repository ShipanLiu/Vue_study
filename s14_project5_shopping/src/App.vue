<template>

  <!-- 这个 nav 不管你去 哪个page，都会显示出来在这里 ， 因为这个nav 不在 router-view 的负责范围之内 -->
  <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/basket">Shopping Bag ({{ basketLength }})</router-link>-
  </div>

  <!-- everything in our application is going to be renfered indide this router view -->
  <router-view/>
</template>

<script>
  // 从 store里面吧 data 取出来 放到 computed 里面：更简便的方法：mapState
  import { mapState, mapGetters } from "vuex"


  export default {
    // load the api
    created() {
      // dispatch and invoke "loadProducts" actions from store
      this.$store.dispatch('loadProducts');
    },

    computed: {

      ...mapGetters([
        "basketLength"
      ]),



      ...mapState({

      //写法1
      productsInBagNr: state => state.productsInBag.length,

      //写法2
      // productsInBagNr(state) {
      //   return state.productsInBag.length;
      // },

      // 写法3: 不能写成  productsInBagNr: "productsInBag".length
      // productsInBagNr: "productsInBag",

      })
    }

  }

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
