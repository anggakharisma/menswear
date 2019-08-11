<template>
    <div class="product-show">
        <message-box ref="messageBox"></message-box>
        <div class="product-name">
            <h1>{{ product.name }}</h1>
        </div>
        <div class="product">
            <div class="product-image">
                <img src="../assets/images/exs.jpg" alt="Product images">
            </div>
            <div class="product-detail">
                <div class="product-description">
                    <h3>Description</h3>
                    <p class="desc">{{ product.description }}</p>
                </div>
                <div class="product-size">
                    <h3 v-if="product.stock">{{ product.stock.name }}</h3>
                    <select name="size" id="size" v-if="product.stock" v-model="stockSelected" @change="stockChanged">
                        <option value="0">Select Size</option>
                        <option v-for="(value, index) in product.stock.value" :value="index" :key="index" v-if="parseInt(value) > 0"> {{ index }}</option>
                    </select>
                </div>
                <button :disabled="sizeSelected" @click="addItemToCart(product, stockSelected)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MessageBox from "./MessageBox";

export default {
  name: "ProductShow",
  components: {
    "message-box": MessageBox
  },
  data() {
    return {
      product: {},
      stockSelected: "0",
      sizeSelected: true,
      itemToAdd: {}
    };
  },
  methods: {
    addItemToCart(product, size) {
      this.$root.addToCart(product, size);
      this.$refs.messageBox.toggleShow("success", "Item added to cart");
      this.sizeSelected = true;
      setTimeout(() => {
        this.sizeSelected = false;
      }, 750);
    },
    stockChanged() {
      if (this.stockSelected == 0) {
        this.sizeSelected = true;
      } else {
        this.sizeSelected = false;
      }
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_ROOT}/api/products/${this.$route.params.productId}`)
      .then(response => {
        this.product = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.product-show {
  max-width: 65%;
  margin: 0 auto;
  .product-name {
    text-align: center;
    margin-bottom: 30px;
    h1 {
      text-transform: uppercase;
      font-family: "Playfair Display", serif;
      text-align: center;
      font-weight: 300;
      display: inline-block;
      border-bottom: 2px solid $black;
      padding-bottom: 10px;
      margin-top: 30px;
      margin-bottom: 0;
    }
  }
  .product {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    grid-gap: 30px;
    margin: auto;
    align-items: center;
    img {
      max-width: 100%;
      padding: 30px;
    }
    .product-detail {
      border-left: 2px solid $light-grey;
      height: 100%;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 60px;
      .product-description {
        h3 {
          font-weight: 400;
        }
        p {
          font-weight: 300;
          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
      button {
        background: $black;
        color: $white;
        margin-top: 25px;
        padding: 10px;
        text-transform: uppercase;
        font-size: 0.85em;
        width: 50%;
        border: 1px solid $black;
        transition: all 86ms ease-in-out;
        &:hover {
          background: $white;
          color: $black;
          cursor: pointer;
        }
        &:disabled {
          background: $light-grey;
          border: 1px solid $light-grey;
          cursor: no-drop;
          color: rgba($black, 0.75);
        }
      }
    }
    .product-size {
      h3 {
        font-weight: 400;
      }
      select {
        padding: 5px 10px;
        background: $white;
      }
    }
  }
}
</style>


