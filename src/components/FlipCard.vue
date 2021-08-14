<template>
  <transition name="flip">
    <div v-bind:key="flipped" class="card" v-on:click="toggleCard()">
      {{ cardInput }}
      <slot
        v-if="(back === '' && this.flipped) || (front === '' && !this.flipped)"
      ></slot>
      <img class="click" src="@/assets/click.png" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "FlipCard",
  data() {
    return {
      flipped: false,
      link: "@/assets/logo.png",
    };
  },
  props: {
    front: {
      Type: String,
      required: true,
    },
    back: {
      Type: String,
      required: true,
    },
    bgColor: {
      Type: String,
    },
    image: {
      Type: String,
    },
  },

  methods: {
    toggleCard() {
      this.flipped = !this.flipped;
    },
  },
  computed: {
    cardInput() {
      if (this.flipped) {
        return this.back;
      }
      return this.front;
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 450;
  font-size: 1.5rem;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
}

.card:hover {
  transform: scale(1.04);
  z-index: 100;
}

.flip-enter-active {
  transition: all 0.5s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter-from,
.flip-leave-from {
  transform: rotateY(180deg);
  opacity: 0;
}

/* Form */
.flashcard-form {
  position: relative;
}

.click {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  visibility: hidden;
  width: 35px;
}
.card:hover .click {
  visibility: visible;
}
</style>
