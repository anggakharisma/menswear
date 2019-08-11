<template>
    <transition name="slideDownUp">
        <div class="message-box" :class="type" v-if="show">
        <div class="box-header" >
            <h3>{{ message }}</h3>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: "MessageBox",
  data() {
    return {
      type: "success",
      message: "",
      show: false
    };
  },
  methods: {
    toggleShow(type, message) {
      this.type = type;
      this.message = message;
      setTimeout(() => {
        this.show = false;
      }, 1000);
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base/variables.scss";
.message-box {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  z-index: 999999999999;
  padding: 5px 30px;
  color: $dark-grey;
  font-size: 0.75em;
  &.success {
    background: $light-grey;
  }
  h3 {
    font-weight: 700;
    text-transform: uppercase;
  }
}
.slideDownUp-enter {
  height: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

.slideDownUp-enter-to {
  height: 50px;
  opacity: 1;
  margin-left: 15px;
  transition: all 0.2s ease-in-out;
}

.slideDownUp-leave {
  height: 50px;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.slideDownUp-leave-to {
  height: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
</style>


