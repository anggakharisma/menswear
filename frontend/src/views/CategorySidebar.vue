<template>
    <div class="category-sidebar">
        <ul>
            <h4>CATEGORIES</h4>
            <li v-for="(category, index) in categories" :key="index">
              <router-link :to="{ name: 'category', params: { categorySlug: category.slug } }">
                  {{ category.name }}
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "CategorySideBar",
  props: ["categories"],
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.category-sidebar {
  margin-top: 30px;
  border-right: 1px solid $light-grey;
  width: 100%;
  height: 100%;
  margin-right: 60px;
  h4 {
    font-weight: 600;
    font-family: "Playfair Display", serif;
    margin-left: -30px;
  }
  ul {
    margin: 0;
    font-weight: 300;
    width: 100%;
    li {
      font-weight: 300;
      margin: 10px 0;
      font-size: 0.9em;
      a {
        text-decoration: none;
        font-weight: 300;
        color: #000000;
        text-transform: capitalize;
      }
    }
  }
}
@media(max-width: 768px) {
  .category-sidebar {
    h4 {
      margin: 0;
      margin-bottom: 15px;
    }
    ul {
      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}
</style>

