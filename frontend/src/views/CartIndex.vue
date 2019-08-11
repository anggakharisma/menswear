<template>
    <div class="cart-index">
        <h4 class="cart-index-title">YOUR SHOPPING CART </h4>

        <h4 v-if="$root.cart.length === 0" class="cart-empty">Cart is empty</h4>
        <cart-item-card v-for="(cartItem, index) in $root.cart" :key="index" :item="cartItem" v-else>
        </cart-item-card >
        <div class="cart-footer">
          <h4 class="checkout box">CHECKOUT</h4>
          <h4 class="clear box" @click="$root.clearCart()">CLEAR</h4>
          <h4 class="cart-total">TOTAL : $ {{ $root.cartTotal() }}, 00</h4>
        </div>
    </div>
</template>

<script>
import CartItemCard from "./CartItemCard";
export default {
  name: "CartIndex",
  components: {
    "cart-item-card": CartItemCard
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.cart-index {
  max-width: 70%;
  margin: 0 auto;
  margin-bottom: 60px;
  margin-top: 30px;
  position: relative;
  .cart-index-title {
    font-weight: 400;
    font-size: 1.5em;
    font-family: "Playfair Display", serif;
  }
  .cart-footer {
    h4 {
      display: inline-block;
    }
    .checkout {
      margin-right: 30px;
    }
    .box {
      background: $black;
      color: $white;
      font-size: 0.85em;
      padding: 10px;
      transition: all .1s ease-in-out;
      border: 1px solid $black;
      &:hover {
        background: $white;
        color: $black;
        cursor: pointer;
      }
    }
    .cart-total {
      position: absolute;
      right: 50px;
    }
  }
}
</style>
