<template>
    <section class="register">
        <h2>REGISTER</h2>
        <hr>
        <div class="form">
            <form action="" @submit.prevent="submitForm()">
                <div class="form-group">
                    <label for="name">Name</label><br>
                    <input type="text" id="name" class="form-control" v-model="user.name"><br>
                </div>
                <div class="form-group">
                    <label for="email">Email</label><br>
                    <input type="email" id="email" class="form-control" v-model="user.email"><br>
                </div>
                <div class="form-group">
                    <label for="password">Password</label><br>
                    <input type="password" id="password" class="form-control" v-model="user.password">
                </div>
                <button>REGISTER</button>

            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "register",
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: ""
      }
    }
  },
  methods: {
    submitForm() {
      axios.post(`${process.env.VUE_APP_API_ROOT}/api/user/signup`, this.user, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error.response)); 
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.register {
  color: $black;
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
        height: 100%;
        margin: 15px 0;
        margin-bottom: 15px;
        padding: 10px;
        font-size: 0.85em;
        border: 1px solid $black;
      }
      button {
        padding: 10px 15px;
        font-size: 0.85em;
        margin-top: 10px;
        background: $black;
        border: 1px solid $black;
        color: $white;
        transition: all .1s ease-in-out;
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


