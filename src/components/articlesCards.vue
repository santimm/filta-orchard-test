<script>
import homeData from '@/assets/mocks/home.json'

export default {
  data: () => {
    return {
      content: homeData.data.articles_cards,
      isHovered: null
    }
  },
  methods: {
    anchorLog(id, name) {
      console.log(
        '%cid: %c' + id + '\n' + '%cname: %c' + name,
        'color:aqua',
        'color:greenyellow',
        'color:aqua',
        'color:greenyellow'
      )
    }
  }
}
</script>

<template>
  <section class="articles l-container">
    <h2 class="articles--title">{{ content.title }}</h2>
    <div class="articles--cardbox">
      <div
        v-for="(item, e) in content.articles"
        :key="e"
        class="item"
        :class="{ hovered: isHovered === e }"
      >
        <picture class="image-box">
          <img :src="item.image_url" alt="" />
        </picture>
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
        <router-link
          class="link"
          v-on:click="anchorLog(item.id, item.title)"
          @mouseenter="isHovered = e"
          @mouseleave="isHovered = null"
          :to="item.link"
          :data-name="item.link_text"
          >{{ item.link_text }}</router-link
        >
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.articles {
  margin-top: 120px;

  opacity: 0;
  animation: opacity 1.6s 7s ease-in-out forwards;

  &--title {
    font-family: @light;
    font-size: larger;
    text-align: center;
    margin-bottom: 32px;
  }

  &--cardbox {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    gap: 62px;

    .item {
      max-width: 286px;
      transition:
        transform 0.3s cubic-bezier(0.5, 0, 0, 1),
        box-shadow 0.25s cubic-bezier(0.5, 0, 0, 1);
      &.hovered {
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.14);
        transform: matrix(1.01, 0, 0, 1.01, 1, 1);
        background: @ui-black-light;
        outline: 10px solid @ui-black-light;
      }

      .image-box {
        display: inline-flex;
        position: relative;
        width: 100%;
        margin-bottom: 28px;
        &::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4px;
          background-color: @ui-red;
        }
        img {
          width: 100%;
        }
      }
      .title {
        margin-bottom: 12px;

        font-family: @regular;
        font-size: medium;
      }
      .description {
        margin-bottom: 28px;

        font-family: @light;
        font-size: small;
        color: @ui-grey;
      }
      .link {
        display: inline-block;
        margin-bottom: 12px;
        padding-bottom: 10px;

        border-bottom: 1px solid @ui-red;
        color: @ui-white;

        font-family: @semi-bold;
        font-size: medium;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          color: @ui-grey;
          border-bottom-color: fade(@ui-green, 60%);
        }
      }
    }
  }
}
@media screen and (min-width: @brakepoint-s) {
  .articles {
    &--title {
      font-size: x-large;
    }

    &--cardbox {
      grid-auto-flow: column;
      grid-template-rows: 1fr 1fr;
      gap: 42px 24px;

      .item {
        max-width: 320px;
      }
    }
  }
}
@media screen and (min-width: @brakepoint-m) {
  .articles {
    margin-top: 240px;

    &--title {
      margin-bottom: 68px;
      font-size: 2.7rem;
      line-height: 1;
    }
    &--cardbox {
      grid-auto-flow: column;
      grid-template-rows: 1fr;

      .item {
        max-width: 384px;

        .title {
          font-family: @semi-bold;
          font-size: 1.13rem;
          margin-bottom: 8px;
        }
        .description {
          font-size: medium;
          line-height: 1.76;
          margin-bottom: 32px;
          color: @ui-grey-dark;
        }
        .link {
          padding: 0 2px 10px 0;
        }
      }
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
