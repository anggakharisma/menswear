<template>
    <section class="login">
        <message-box ref="messageBox"></message-box>
        <h2>LOGIN</h2>
        <hr>
        <div class="form">
            <form action="" @submit.prevent="submitForm()">
                <div class="form-group">
                    <label for="email">Email</label><br>
                    <input type="email" id="email" class="form-control" v-model="loginCred.email" required><br>
                </div>
                <div class="form-group">
                    <label for="password">Password</label><br>
                    <input type="password" id="password" class="form-control" v-model="loginCred.password" required>
                </div>
                <button>LOGIN</button>
                <router-link to="/register"><h5>Register Here</h5></router-link>
            </form>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";

export default {
  name: "Login",
  data() {
    return {
      loginCred: {
        email: "",
        password: ""
      }
    };
  },
  beforeCreate() {
    if (cookie.get("utn")) {
      this.$router.push("/");
    }
  },
  methods: {
    submitForm() {
      if (this.loginCred.email != "" || this.loginCred.password != "") {
        axios
          .post(process.env.VUE_APP_API_ROOT + "/api/user/signin", {
            email: this.loginCred.email,
            password: this.loginCred.password
          })
          .then(response => {
            cookie.set("utn", response.data.token, { expires: 7 });
            this.$refs.messageBox.toggleShow("success", response.data.message);
            axios
              .get(process.env.VUE_APP_API_ROOT + "/api/me", {
                headers: {
                  Authorization: cookie.get("utn")
                }
              })
              .then(response => {
                this.$root.user = response.data;
                this.$root.isUserLoggedIn = true;
              })
              .catch(error => {
                if (this.$root.isUserLoggedIn) {
                  this.$root.ifUserLoggedIn = false;
                }
              });
            setTimeout(() => {
              this.$router.push("/admin/home");
            }, 500);
          })
          .catch(error =>
            this.$refs.messageBox.toggleShow(
              "failed",
              error.response.data.message
            )
          );
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.login {
  color: $black;
  a {
    text-decoration: none;
    color: $black;
  }
  // background: rgba($light-grey, 0.3);
  max-width: 75%;
  margin: 10px auto;
  padding: 30px;
  hr {
    width: 300px;
    margin: 30px auto;
    border: 1px solid $dark-grey;
  }
  h2 {
    text-align: center;
    margin-top: 20px;
  }
  .form {
    display: block;
    width: 100%;
    text-align: center;
    form {
      display: inline-block;
      width: 45%;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      label {
        font-weight: 700;
      }
      input {
        width: 100%;
        margin: 15px 0;
        margin-bottom: 15px;
        // height: 300px ;
        padding: 15px;
        height: 100%;
        // font-size: 0.85em;
        border: 1px solid $black;
      }
      button {
        padding: 10px 15px;
        font-size: 0.85em;
        background: $black;
        border: 1px solid $black;
        color: $white;
        transition: all 0.1s ease-in-out;
        &:hover {
          background: $white;
          color: $black;
          cursor: pointer;
        }
      }
    }
  }
}
</style>


