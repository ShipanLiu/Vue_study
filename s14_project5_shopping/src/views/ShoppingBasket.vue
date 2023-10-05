<template>
  <div class="basket">
    <!-- or you can use v-if="basketItems.length" -->
    <template v-if="basketLength">
      <div class="items">
        <div
        v-for="(pro, index) in basketItems"
        :key="index"
        class="item">
          <div @click="removePro(pro.id)" class="remove">Remove item</div>
          <div class="photo"><img :src="pro.images[Math.floor(Math.random()*(pro.images.length))]" alt="not found image"></div>
          <div class="description">{{ pro.description.substring(0, 20) }}</div>
          <div class="price">
            <span class="quantity-area">
              <button @click="pro.quantity--" :disabled="pro.quantity <= 1">-</button>
              <span class="quantity">{{ pro.quantity }}</span>
              <button @click="pro.quantity++">+</button>
            </span>
            <span class="amount">US$ {{ (pro.price * pro.quantity ).toFixed(2) }}</span>
          </div>
        </div>
        <div class="grand-total"> Grand Total: {{ calcTotal() }}</div>
      </div>
    </template>

    <template v-else>
      <h4>no items in basket yet</h4>
    </template>
  </div>
</template>

<script>

import { mapState , mapGetters} from 'vuex';

export default {
  name: 'ShoppingBasket',

  computed: {
    ...mapGetters({
      basketLength: "basketLength"
    }),

    ...mapState({
    basketItems: "productsInBag",
  })
  },

  methods: {

    removePro(proId) {
      this.$store.dispatch("removeProductsInBag", proId);
    },

    calcTotal() {
      // forEach 比 reduce 更容易懂
      return this.basketItems.reduce((priceSum, pro) => {
        priceSum += pro.price * pro.quantity;
        return priceSum;
      }, 0).toFixed(2);
    }
  },

}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
