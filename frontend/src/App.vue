<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app";
#app {
  height: 100%;
  color: $black;
}
.grid {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.25em;
}
</style>

<script>
import Navbar from "./views/Navbar";
import BreadCrumb from './views/BreadCrumb';
export default {
  components: {
    Navbar: Navbar,
    'bread-crumb': BreadCrumb
  },
  mounted() {
    console.log(process.env.BASE_URL);
  }
};
</script>
