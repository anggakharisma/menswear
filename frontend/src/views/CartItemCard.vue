<template>
    <div class="cart-item-card">
        <div class="delete-item" @click="$root.deleteItem(item)">X</div>
        <div class="content grid" v-if="item">
            <img src="../assets/images/exs.jpg" alt="images">
            <div class="product-detail">
                <h3>{{ item.name }}</h3>
                <h3 class="size">Size : {{ item.size }}</h3>
            </div>
            <div class="product-qty">
                <h3 class="circle-button decrease" @click="$root.changeQty('decrease', item)">-</h3>
                <h3>Quantity: {{ item.qty }}</h3>
                <h3 class="circle-button increase" @click="$root.changeQty('increase', item)">+</h3>
            </div>
            <div class="product-total">
                <h3>$. {{ item.price * item.qty }}, 00</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CartItemCard",
  data() {
    return {
      deletePrompt: false
    };
  },
  props: ["item"],
  mounted() {
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.cart-item-card {
  position: relative;
  width: 100%;
  background: rgba($light-grey, 0.3);
  padding: 15px;
  margin: 10px 0;
  .delete-item {
    &:hover {
      cursor: pointer;
      transform: scale(1.5);
    }
    transition: transform 0.1s ease-in-out;
    position: absolute;
    font-size: 0.5em;
    width: 20px;
    height: 20px;
    padding: 5px;
    text-align: center;
    top: 6px;
    left: 7px;
    background: $black;
    color: $white;
    font-weight: 800;
    border-radius: 50%;
  }
  h3 {
    font-weight: 300;
  }
  .content {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .product-total {
      h3 {
        text-align: right;
      }
    }
    img {
      width: 65px;
      border-radius: 130px;
    }
    .product-detail {
      h3 {
        font-weight: 400;
        margin: 0;
        text-transform: capitalize;
      }
      .size {
        font-weight: 300;
      }
    }
    .product-qty {
      display: flex;
      h3 {
        margin: 0 7px;
      }
      .circle-button {
        background: $black;
        font-weight: 600;
        color: $white;
        text-align: center;
        width: 20px;
        border-radius: 50%;
        padding: 2px;
        font-size: 0.85rem;
        height: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>


