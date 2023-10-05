<template>
  <div class="home">
    <div class="products">
      <div
      v-for="(pro, index) in products"
      :key="index"
      class="product"
      :class="{inBag: proIsInBag(pro)}"
      >
        <div class="product-image" :style="{backgroundImage: 'url(' + pro.images[Math.floor(Math.random()*(pro.images.length))] + ')'}"></div>
        <h4>{{ pro.description.substring(0, 20) }}</h4>
        <p class="price">US$ {{ pro.price.toFixed(2) }}</p>
        <!-- if the pro is in basket, then let the button disappear -->
        <button v-if="!proIsInBag(pro)" @click="addToBag(pro)">Add to bag</button>
        <template v-else>
          <p class="basket-info">this item is added into the basket</p>
          <button @click="removeFromBasket(pro.id)" class="remove">remove from baskket</button>
        </template>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
    }
  },

  // 可以使用 mapState 来简化从 store 里面取 data
  computed: {
    // get the data from store（但是不能直接 save data to store， 是单向的）
    // 为什么不在data 中,而是在 computed？ 因为 this.$store.state.products 有初始值， 但是之后被更新了成api的数据。我们需要最新的值
    products() {
      return this.$store.state.products;
    },
    //this computed attribute is read only
    productsInBag() {
      return this.$store.state.productsInBag;
    },

  },

  methods: {
    addToBag(pro) {
      // 给这个pro加上一个 "quantity" 的 key
      pro.quantity = 1;
      console.log(pro);
      console.log(this.productsInBag);
      // now is time to update the store using by dispatching action
      this.$store.dispatch("addToBag", pro);
    },

    // check if the product is added into the bag and disable the add button
    // *****if "productsInBag" property in store changes, any computed property or method in the Vue component that depends on that state property will be re-evaluated.
    proIsInBag(pro) {
      return this.productsInBag.find(item => item.id == pro.id) ? true : false;
    },

    // use filter method
    removeFromBasket(proId) {
      // now upstate "state" in store
      this.$store.dispatch("removeProductsInBag", proId);
    },

  }
}
</script>

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;


      .product {
        // flex: ⟨flex-grow⟩⟨flex-shrink⟩⟨flex-basis⟩
        flex:1 0 calc(25% - 16px);
        max-width: calc(25% - 16px);
        box-sizing: border-box;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
          max-width: 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
          max-width: 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }

        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.2;
          }
          //The & symbol is a reference to the parent selector within nested rules.
          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }

        p.basket-info {
          color: red;
        }


      }
    }

  }


</style>
