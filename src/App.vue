<script>
import introGallery from '@/assets/mocks/introGallery.json'
import articlesCards from '@/assets/mocks/articlesCards.json'

export default {
  data: () => {
    return {
      dataA: introGallery.data,
      dataB: articlesCards.data
    }
  }
}
</script>

<template>
  <h1 class="container">app - test</h1>
</template>

<style src="./styles/index.less" lang="less"></style>
