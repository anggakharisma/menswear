import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MessageBox from './views/MessageBox';
import cookie from 'js-cookie';
import Crypto from 'crypto';
import _ from 'lodash';
import vClickOutSide from 'v-click-outside';

Vue.config.productionTip = false
Vue.use(vClickOutSide);

Vue.component('message-box', MessageBox);


new Vue({
  router,
  data() {
    return {
      cart: []
    }
  },
  beforeMount() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.cart = JSON.parse(localStorage.getItem('cart'));
  },

  methods: {
    addToCart(item, size) {
      let hash = Crypto.createHash('md5').update(item.name + size).digest("hex");

      if (this.cart.length < 1) {
        this.cart.push({ ...item, size, hash, qty: 1 })
        this.writeToCookie();
        return;
      }
      let found = this.cart.some((cartItem) => {
        return cartItem.hash === hash;
      });
      if (found) {
        let itemIndex = this.cart.findIndex(cartItem => cartItem.hash === hash);
        this.cart[itemIndex].qty++;
        this.writeToCookie();
        return
      }
      this.cart.push({ ...item, size, hash, qty: 1 });
      this.writeToCookie();
      return;
    },
    changeQty(type, item) {
      let found = this.cart.some((cartItem) => {
        return cartItem.hash === item.hash;
      });
      if (found) {
        let itemIndex = this.cart.findIndex(cartItem => cartItem.hash === item.hash);
        switch (type) {
          case "increase":
            this.cart[itemIndex].qty++;
            break;
          case "decrease":
            this.cart[itemIndex].qty--;
            if (this.cart[itemIndex].qty < 1) {
              this.deleteItem(item);
            }
            break;
        }
        this.writeToCookie();
        return;
      }
    },
    deleteItem(item) {
      _.remove(this.cart, cartItem => {
        return cartItem.hash === item.hash;
      });
      this.writeToCookie();
      return;
    },
    clearCart() {
      this.cart = [];
      this.writeToCookie();
    },
    itemTotal(item) {
      let itemTotal = 0;
      _.forEach(this.cart, cartItem => {
        if (cartItem.hash === item.hash) {
          itemTotal += cartItem.price * cartItem.qty;
        }
      });
      return itemTotal;
    },
    cartTotal() {
      let total = 0;
      this.cart.forEach(cartItem => {
        total += this.itemTotal(cartItem);
      })
      return total;
    },
    writeToCookie() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  },
  mounted() {
    if (cookie.get('utn')) {

      axios.get(process.env.VUE_APP_API_ROOT + '/api/user/me', {
        headers: {
          Authorization: cookie.get('utn')
        }
      })
        .then(response => {
          this.user = response.data;
          this.isUserLoggedIn = true;
        })
        .catch(() => {
          if (this.isUserLoggedIn) {
            this.ifUserLoggedIn = false;
          }
        })
    }
  },
  render: h => h(App)
}).$mount('#app')
