<template>
    <div class="category-show">
        <div class="side-bar">
            <CategorySidebar v-bind:categories="categories"></CategorySidebar>
        </div>
        <div class="category-product-show">
            <div class="category-name">
                <h2>{{ categoryName }}</h2>
            </div>
            <div class="content grid">
                <ProductCard v-for="(product, index) in products" :key="index" :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard";
import CategorySidebar from "./CategorySidebar";

export default {
  name: "CategoryShow",
  components: {
    ProductCard: ProductCard,
    CategorySidebar: CategorySidebar
  },
  data() {
    return {
      products: [],
      categoryName: "",
      categories: []
    };
  },
  mounted() {
    this.getCategories();
    this.getCategoriesProduct();
  },
  watch: {
    $route() {
      this.products = [];
      this.getCategoriesProduct();
    }
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
    getCategoriesProduct() {
      axios
        .get(
          `${process.env.VUE_APP_API_ROOT}/api/categories/${
            this.$route.params.categorySlug
          }/products`
        )
        .then(response => {
          console.log(response.data);
          this.products.push(...response.data);
          this.categoryName = this.products[0].category.name;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.category-show {
  max-width: 85%;
  margin: 15px auto;
  display: flex;
  .category-product-show {
    padding-left: 30px;
    .category-name {
      h2 {
          font-weight: 300;
          text-transform: uppercase;
          font-family: 'Playfair Display';
          border-bottom: 1px solid $black;
          display: inline-block;
          padding-bottom: 10px;
      }
    }
  }
}
@media (max-width: 768px) {
  .category-show {
    display: block;
    .side-bar {
      width: 100%;
      padding-right: 30px;
      ul {
          padding-left: 30px;
      }
    }
  }
}
</style>
