<script>
import introGallery from '@/components/introGallery.vue'
export default {
  components: { introGallery }
}
</script>

<template>
  <intro-gallery />
</template>

<style lang="less">
html {
  background: @ui-black;
}
body {
  padding: 40px 20px;
  @media screen and (min-width: @brakepoint-m) {
    padding: 186px 0;
  }
}
</style>
