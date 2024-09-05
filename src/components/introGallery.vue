<script>
import homeData from '@/assets/mocks/home.json'

export default {
  data: () => {
    return {
      content: homeData.data.intro_gallery
    }
  }
}
</script>

<template>
  <section class="intro l-container">
    <div class="intro--description">
      <h1>{{ content.title }}</h1>
      <p>{{ content.description }}</p>
    </div>

    <div class="intro--highlight">
      <strong>{{ content.highlight }}</strong>
      <p>{{ content.highlight_description }}</p>
    </div>

    <div class="intro--gallerybox">
      <img v-for="(item, e) in content.gallery" :key="e" :src="item.image_url" alt="" />
    </div>
  </section>
</template>

<style lang="less" scoped>
.intro {
  display: grid;
  grid-template: 1fr;
  padding: 16px;

  &--description {
    margin-bottom: 32px;

    h1 {
      font-family: @light;
      font-size: larger;
      text-align: center;
      padding-bottom: 18px;
      margin-bottom: 26px;
      border-bottom: 1px solid @ui-white;
    }
    p {
      font-family: @light;
      font-size: small;
      text-align: center;
      color: @ui-grey;
    }
  }
  &--highlight {
    grid-row: 3;

    margin-bottom: 20px;
    strong {
      display: block;
      margin-bottom: 14px;
      font-family: @semi-bold;
      font-size: small;
      color: @ui-red;
    }
    p {
      font-family: @regular;
      font-size: small;
    }
  }
  &--gallerybox {
    display: grid;
    width: 100%;
    padding: 20px;
    gap: 20px;
    img {
      width: 100%;
    }
  }
}
@media screen and (min-width: @brakepoint-s) {
  .intro {
    &--gallerybox {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr;

      img:nth-of-type(1) {
        grid-row: span 2;
      }
    }
  }
}
@media screen and (min-width: @brakepoint-m) {
  .intro {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    padding: 0;
    column-gap: 24px;
    &--description {
      grid-column: 3;
      grid-row: 1;
      justify-self: left;
      margin-bottom: 44px;
      h1 {
        font-size: 1.68rem;
        padding-bottom: 10px;
        text-align: left;
      }
      p {
        text-align: left;
        font-size: 1.12rem;
        line-height: 1.66;
      }
    }
    &--highlight {
      grid-column: 3;
      grid-row: 2;
      strong {
        font-size: medium;
      }
      p {
        font-size: 1.16rem;
      }
    }
    &--gallerybox {
      grid-row: span 2;
      grid-column: span 2;
      gap: 20px 24px;
      padding: 0;
    }
  }
}
</style>
