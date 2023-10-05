<template>
  <div class="home">
    <div class="products">
      <div
      v-for="(pro, index) in this.products"
      :key="index"
      class="product">
          <div class="product-image" :style="{backgroundImage: 'url(' + pro.images[Math.floor(Math.random()*(pro.images.length))] + ')'}"></div>
        <h4>{{ pro.description.substring(0, 20) }}</h4>
        <p class="price">US$ {{ pro.price.toFixed(2) }}</p>
        <button @click="addToBag(pro)">Add to bag</button>
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

  computed: {
    // get the data from store（但是不能直接 save data to store， 是单向的）
    // 为什么不在data 中,而是在 computed？ 因为 this.$store.state.products 有初始值， 但是之后被更新了成api的数据。我们需要最新的值
    products() {
      return this.$store.state.products;
    },
    productsInBag() {
      return this.$store.state.productsInBag;
    },

  },

  methods: {
    addToBag(pro) {
      // 给这个pro加上一个 "quantity" 的 key
      pro.quantity = 1;
      console.log(pro);
      // now is time to update the store using by dispatching action
      this.$store.dispatch("addToBag", pro);
    },

    // check if the product is added into the bag and disable the add button
    proIsInBag(pro) {
      // if(this.productsInBag.)
    }

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

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

  }


</style>
