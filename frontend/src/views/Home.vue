<template>
  <div class="home">
    <header class="header full-height">
        <div class="circle"></div>
        <div class="left-text">
            <div class="content">
              <h1>BEST SUIT FOR YOU</h1>
              <router-link to="/shop">SHOP NOW</router-link>
            </div>
        </div>
        <div class="image-tall">
            <img src="../assets/images/header.png" alt="Header image">
        </div>
    </header>

    <hr class="sepertaor-line" />

    <section class="clean">
        <div class="content">
            <img src="../assets/images/clean.png" alt="Clean section">
            <div class="right-text">
                <h1>CLEAN</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolor nulla repellat architecto recusandae
                    nobis reiciendis voluptates expedita ad. Illo, porro accusamus. Et atque qui distinctio ipsam aspernatur
                    sequi illo!</p>
            </div>
        </div>
    </section>

    <section class="unique">
        <div class="left-side-box">
            <h1>UNIQUE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae, quibusdam nemo nostrum, aperiam
                illo ex harum, fugiat minus ullam inventore sed? Nostrum sapiente accusamus consectetur minima odit quis
                aspernatur?
            </p>
        </div>
        <div class="right-side-image">
            <img src="../assets/images/unique.png" alt="Unique Image">
        </div>
    </section>

    <section class="catalogue">
        <div class="catalogue-image">
            <img src="../assets/images/top-picks.png" alt="Top picks">
            <h1>TOP PICKS</h1>
        </div>
        <div class="catalogue-item">
            <div v-for="category in categories" v-bind:key="category._id">
              <router-link v-bind:to="{ name: 'category', params: { categorySlug: category.slug } }">
                <h1>{{ category.name }}</h1>
              </router-link>
            </div>
        </div>
    </section>

    <section class="instagram-feeds">
        <h1>Instagram Feeds</h1>
        <div class="images">
            <img src="../assets/images/insta-feeds.jpg" alt="">
            <img src="../assets/images/insta-feeds.jpg" alt="">
            <img src="../assets/images/insta-feeds.jpg" alt="">
            <img src="../assets/images/insta-feeds.jpg" alt="">
        </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      categories: []
    };
  },
  methods: {
    getCategories() {
      axios
        .get(`${process.env.VUE_APP_API_ROOT}/api/categories`)
        .then(response => {
          this.categories.push(...response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    convertToSlug(Text) {
      return Text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  },
  mounted() {
    this.getCategories();
    console.log(process.env.BASE_URL);
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.home {
  min-height: 100%;
}
.header {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  .left-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 50%;
    .content {
      max-width: 40%;
    }
    h1 {
      font-family: "Playfair Display", serif;
      font-size: 4em;
      margin: 0;
    }
    a {
      font-family: "Playfair Display", serif;
      background: $black;
      color: $white;
      display: inline-block;
      font-size: 1em;
      text-decoration: none;
      transition: all 0.1s ease-in-out;
      padding: 10px;
      margin-top: 30px;
      width: 100%;
      border: 1px solid $black;
      &:hover {
        background: $white;
        color: $black;
      }
    }
  }
  .image-tall {
    width: 30%;
    text-align: center;
    padding: 30px;
    margin-left: -120px;
    img {
      max-width: 100%;
    }
  }
  .circle {
    position: absolute;
    background: $light-grey;
    width: 200px;
    height: 200px;
    top: 20%;
    left: 25%;
    z-index: -99999;
    border-radius: 50%;
  }
}

.sepertaor-line {
  border-top: 3px solid $light-grey;
  width: 50%;
  margin: 70px auto;
}

.clean {
  min-height: 55%;
  background: #fbfbfb;
  padding: 60px;
  width: 100%;
  margin: 60px 0;
  .content {
    img {
      width: 25%;
      margin-left: 100px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    .right-text {
      text-align: center;
      width: 50%;
      font-family: "Playfair Display", serif;
      height: 100%;
      h1 {
        margin-bottom: 20px;
        font-size: 2.3em;
        color: $dark-grey;
      }
      p {
        max-width: 50%;
        margin: 0 auto;
        color: rgba($dark-grey, 0.85);
        font-weight: 400;
        line-height: 1.5em;
      }
    }
  }
}

.unique {
  max-width: 75%;
  margin: 130px auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .left-side-box {
    background: $white;
    box-shadow: -10px 10px 3px $light-grey;
    padding: 80px;
    width: 50%;
    z-index: 99999;
    margin-left: 0;
    text-align: center;
    margin-top: 30px;
    color: $dark-grey;
    font-family: "Playfair Display", serif;
    h1 {
      font-size: 3em;
    }
  }
  .right-side-image {
    text-align: center;
    width: 50%;
    img {
      width: 100%;
      z-index: -9999;
      text-align: center;
      margin-left: -175px;
    }
  }
}

.catalogue {
  max-width: 75%;
  margin: 90px auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  .catalogue-image {
    transition: all 0.1s ease-in-out;
    h1 {
      position: absolute;
      top: 15%;
      left: 10%;
      color: $light-grey;
      font-family: "Playfair Display", serif;
      font-size: 2.4em;
      width: 20%;
      transition: all 0.1s ease-in-out;
    }
    img {
      width: 85%;
      padding: 30px;
      max-width: 100%;
      transition: all 0.1s ease-in-out;
    }
    &:hover {
      // width: 80%;
      cursor: pointer;
      img {
        box-shadow: -10px 10px 5px $light-grey;
      }
    }
  }
  .catalogue-item {
    a {
      text-decoration: none;
    }
    width: 40%;
    h1 {
      border: 1px solid $black;
      padding: 30px;
      text-align: center;
      transition: all 0.1s ease-in-out;
      font-family: 'Playfair Display', serif;
      text-transform: uppercase;
      color: $black;
      &:hover {
        background: $black;
        color: $light-grey;
        cursor: pointer;
      }
    }
  }
}

.instagram-feeds {
  position: relative;
  h1 {
    position: absolute;
    width: 35%;
    top: -45px;
    background: #202020;
    font-size: 1.5em;
    color: $light-grey;
    padding: 20px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
  }
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .header {
    overflow: hidden;
    flex-direction: column;
    .left-text {
      h1 {
        font-size: 3em;
      }
    }
    .image-tall {
      position: absolute;
      z-index: -9999;
      width: 100%;
      top: 30%;
      left: 30%;
      img {
        width: 75%;
      }
    }
  }
  .clean {
    .content {
      flex-direction: column;
      img {
        padding: 0;
        margin: 0;
        width: 100%;
        margin-bottom: 65px;
      }
      .right-text {
        width: 100%;
      }
    }
  }
  .unique {
    max-width: 75%;
    margin: 130px auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .left-side-box {
      padding: 40px;
      width: 100%;
      margin-bottom: 30px;
      z-index: 99999;
      text-align: center;
      color: $dark-grey;
      font-family: "Playfair Display", serif;
      h1 {
        font-size: 3em;
      }
    }
    .right-side-image {
      text-align: center;
      width: 100%;
      margin: 0 auto;
      img {
        margin: 40px auto;
        width: 100%;
        z-index: -9999;
        text-align: center;
        // margin-left: -175px;
      }
    }
  }

  .catalogue {
    flex-direction: column;
    .catalogue-image {
      width: 100%;
      img {
        width: 100%;
      }
      h1 {
        font-size: 1.618em;
        top: 10%;
      }
    }
    .catalogue-item {
      width: 75%;
      h1 {
        font-size: 1em;
        padding: 30px;
      }
    }
  }
}
</style>


