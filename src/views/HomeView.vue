<script>
import ArticlesCards from '@/components/articlesCards.vue'
import introGallery from '@/components/introGallery.vue'
export default {
  components: { introGallery, ArticlesCards }
}
</script>

<template>
  <intro-gallery />
  <articles-cards />
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
