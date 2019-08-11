<template>
    <nav class="main-nav">
        <div class="logo">
            <router-link v-bind:to="{ name: 'home' }"><h1>MENS</h1></router-link>
        </div>
        <div class="right-side">
            <div class="menu-button" @click="toggleNav()">
                <div class="box"></div>
                <div class="box"></div>
            </div>
            <ul :class="{ toggleHeight: toggleNavStatus }" v-click-outside="onClickOutside">
                <li>
                    <router-link to="/shop">SHOP</router-link>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">BLOG</a>
                </li>
                <li class="cart">
                    <router-link to="/cart">CART ( {{ $root.cart.length }} )</router-link>
                </li>
                <li>
                    <router-link to="/login" v-if="!$root.isUserLoggedIn">LOGIN</router-link>
                    <router-link :to="redirectLink" v-else>{{ $root.user.name }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggleNavStatus: false,
      length: 0,
      loggedIn: false,
      userName: ""
    };
  },
  methods: {
    toggleNav() {
      this.toggleNavStatus = !this.toggleNavStatus;
    },
    onClickOutside(event) {
      if (
        event.target.className == "box" ||
        event.target.className == "menu-button"
      ) {
        this.toggleNavStatus = this.toggleNavStatus;
      } else {
        this.toggleNavStatus = false;
      }
    }
  },
  beforeCreate() {
    this.toggleNavStatus = false;
  },
  computed: {
    redirectLink() {
      return this.$root.user.isAdmin ? "/admin/home" : "/user/home";
    }
  },
  watch: {
    $route() {
      this.toggleNavStatus = false;
    }
  }
};
</script>



<style lang="scss">
@import "../assets/scss/base/variables.scss";
.main-nav {
  width: 100%;
  display: flex;
  box-shadow: 0 10px 5px rgba($black, 0.1);
  align-items: center;
  background: $white;
  padding: 15px 45px;
  position: black;
  z-index: 9999999999;
  .logo {
    a {
      text-decoration: none;
      color: $black;
    }
    h1 {
      font-weight: 600;
      font-size: 1.85em;
    }
  }
  .right-side {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .menu-button {
      display: none;
      .box {
        width: 40px;
        height: 4px;
        margin: 12px 0;
        background: $dark-grey;
      }
    }
    ul {
      list-style-type: none;
      li {
        display: inline-block;
        margin: 0 25px;
        a {
          font-size: 0.9em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.1s ease-in-out;
          color: $dark-grey;
          font-weight: 400;
          &:hover {
            border-bottom: 2px solid $black;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
  .active {
    border-bottom: 2px solid $black;
    padding-bottom: 5px;
  }
}

@media (max-width: 768px) {
  .main-nav {
    .right-side {
      .menu-button {
        display: block;
        &:hover {
          cursor: pointer;
        }
      }
      ul {
        display: block;
        position: absolute;
        z-index: 100;
        top: 16%;
        left: 7%;
        background: $white;
        box-shadow: 0 10px 5px $light-grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85%;
        text-align: center;
        // padding: 30px;
        line-height: 0;
        height: 0;
        overflow: hidden;
        li {
          display: block;
          margin-bottom: 50px;
        }
        &.toggleHeight {
          height: auto;
          padding: 30px;
        }
      }
    }
  }
}
</style>
