<template>
    <div class="product-card">
        <router-link :to="{ name: 'productShow', params: { categorySlug: product.category.slug, productId: product._id } }">
            <img src="../assets/images/exs.jpg">
            <div class="content">
                <h5 class="product-name">{{ product.name }}</h5>
                <h5>$. {{ product.price }}</h5>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";

.product-card {
  position: relative;
  a {
    text-decoration: none;
    color: $black;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 0px;
    h5 {
      font-weight: 300;
      margin: 3px 0;
      letter-spacing: 1.1px;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
    .product-name {
      font-weight: 600;
    }
  }
}
</style>
