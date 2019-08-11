<template>
    <div class="bread-crumb-item">
        <router-link to="/">{{ capitalize }}</router-link>
    </div>
</template>

<script>
export default {
  name: "BreadCrumbItem",
  props: ["breadItem"],
  mounted() {
  },
  computed: {
      capitalize() {
          let caps = this.breadItem[0].toUpperCase() + this.breadItem.slice(1);
          return caps;
      }
  }
};
</script>

<style lang="scss">
.bread-crumb-item {
  display: inline-block;
  a {
    color: #4d4d4d;
    text-decoration: none;
    margin: 16px 20px;
    display: inline-block;
  }
}
</style>


