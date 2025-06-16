<script>
/* utils */
import { getImageUrl } from '@/utils/imageUrl'

export default {
  name: 'imageModal',
  props: ['item'],
  methods: {
    getImageUrl,

    close() {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div class="modal .l-center-box" v-on:click="close">
    <img class="modal--image" :src="getImageUrl(item.url)" :alt="item.alternativeText" />
    <span>my modal test</span>
    <button class="modal--btn" v-on:click="close"></button>
  </div>
</template>

<style lang="less" scoped>
.modal {
  display: grid;
  position: fixed;
  width: 66vw;
  height: 76vh;
  max-height: 700px;
  align-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  overflow: hidden;

  background-color: @ui-black-light;
  border-bottom: 4px solid @ui-red;
  border-radius: 12px;
  border-top-right-radius: 0;

  opacity: 0;
  animation: opacity 0.3s ease-in-out forwards;

  &::after {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: fade(@ui-black-light, 90%);
    z-index: 0;
    top: 0;
    left: 0;
  }

  &--image {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    max-height: 600px;
    z-index: 1;
  }

  &--btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    z-index: 2;

    background-color: @ui-red;

    cursor: pointer;
    appearance: none;
    border: 0;
    margin: 0;
    padding: 0;
    &::before,
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 4px;
      background-color: @ui-white;
    }
    &::before {
      transform: rotate(-45deg) translate(-2px, 2px);
    }
    &::after {
      transform: rotate(45deg) translate(0px, -1px);
    }
    &:hover {
      background-color: fade(@ui-red, 50%);
      &::before,
      &::after {
        background-color: fade(@ui-white, 90%);
      }
    }
  }
}
@media screen and (min-width: @brakepoint-s) {
  .modal {
    &--image {
      height: 46vw;
    }
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
