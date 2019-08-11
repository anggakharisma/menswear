<template>
    <div class="shop-index">
        <div class="side-bar">
            <CategorySidebar v-bind:categories="categories"></CategorySidebar>
        </div>
        <section class="products">
            <h1>FEATURED PRODUCTS</h1>
            <div class="product-item">
              <ProductCard :product="product" v-for="(product, index) in products.slice(0, 3)" :key="index"></ProductCard>
            </div>
          <!-- <section class="best-seller">
            <h1>BEST SELLER</h1>
          </section> -->
        </section>
    </div>
</template>

<script>
import axios from "axios";
import CategorySidebar from "./CategorySidebar";
import ProductCard from "./ProductCard";

export default {
  name: "ShopIndex",
  components: {
    CategorySidebar: CategorySidebar,
    ProductCard: ProductCard
  },
  data() {
    return {
      categories: [],
      products: []
    };
  },
  methods: {
    getCategories() {
      axios
        .get(`${process.env.VUE_APP_API_ROOT}/api/categories`)
        .then(response => {
          this.categories.push(...response.data);
        })
        .catch(err => console.log(err));
    },
    getProducts() {
      axios
        .get(`${process.env.VUE_APP_API_ROOT}/api/products`)
        .then(response => {
          this.products.push(...response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";

.shop-index {
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  .side-bar {
    width: 40%;
    padding-right: 30px;
  }
  .products {
    margin-top: 30px;
    padding: 30px;
    padding-top: 0;
    .best-seller {
      margin-top: 60px;
    }
    h1 {
      margin-top: 0;
      padding-bottom: 15px;
      font-weight: 300;
      border-bottom: 0.15rem solid $black;
      font-family: "Playfair Display", serif;
      display: inline-block;
    }
    .product-item {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1.25em;
      display: grid;
      justify-items: center;
      align-items: center;
    }
  }
}

@media (max-width: 768px) {
  .shop-index {
    display: block;
    .side-bar {
      width: 100%;
      padding-right: 30px;
    }
  }
}

</style>

