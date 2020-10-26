<template>
  <header class="header container">
    <nuxt-link to="/">
      <img v-if="!icon" :src="iconSrc" alt="Logo" class="logo" />
    </nuxt-link>
    <p v-if="icon" class="icon">
      {{ icon }}
    </p>
    <h1 class="title">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      <span v-if="count">{{ count }} </span>{{ description }}
    </h2>
  </header>
</template>

<script>
import getConfig from '~/services/getConfig'

export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    count: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    const config = getConfig()
    return {
      iconSrc: config.icon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.header {
  text-align: center;
  padding-top: 64px;
  padding-bottom: 64px;
}

.logo {
  width: 75px;
}

.icon {
  font-size: 48px;
  margin: 0;
}

.title {
  color: $primary-color;
  font-weight: 900;
  font-size: $font-xl;
  margin-bottom: 0;
  margin-top: 16px;
}

.subtitle {
  font-size: $font-md;
  color: $grey-color;
  font-weight: 400;
  font-family: $primary-font-family;
}
</style>
