<template>
  <nav>
    <div class="topbar">
      <nuxt-link to="/" class="back-button topbar__col">
        ← {{ $t('buttons.navigation.back') }}
      </nuxt-link>
      <nuxt-link to="/" class="logo topbar__col">
        <img :src="icon" alt="Logo" class="logo" />
      </nuxt-link>
      <TheSearch />
    </div>
    <div class="categorybar">
      <nuxt-link
        v-for="(category, index) in categories"
        :key="index"
        :to="`/${category.slug}/`"
        :class="{
          'category-button': true,
          'category-button--active': category.slug === slug
        }"
      >
        {{ category.name }}
        <span class="emoji">{{ category.icon }}</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import TheSearch from '~/components/TheSearch.vue'
import getConfig from '~/services/getConfig'

export default {
  name: 'TheNavbar',
  components: {
    TheSearch
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      default: null
    }
  },
  data() {
    const config = getConfig()
    return {
      contactLink: config.contact_link,
      icon: config.icon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.topbar {
  padding: 16px 16px;
  box-shadow: 0 4px 24px rgba(32, 43, 54, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  left: 0;
  z-index: 100;
  font-family: $secondary-font-family;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.back-button {
  display: block;
  text-decoration: none;
  color: $primary-color;
  font-size: $font-md;
  transform: translateX(0) translateY(0) translateZ(0);
  transition: transform 0.4s ease;
  align-items: center;
  font-weight: 700;

  &:hover {
    transform: translateX(5px) translateY(0) translateZ(0);
  }
}

.contact-button {
  display: block;
  text-decoration: none;
  color: $primary-color;
  font-size: $font-md;
  transform: translateX(0) translateY(0) translateZ(0);
  transition: transform 0.4s ease;
  align-items: center;
  font-weight: 700;
  text-align: right;

  &:hover {
    transform: translateX(-5px) translateY(0) translateZ(0);
  }
}

.categorybar {
  margin-top: 80px;
  padding: 0 16px;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border: 2px solid #eee;
  }
}

.category-button {
  display: inline-block;
  padding: 16px 32px;
  margin-right: 4px;
  border: 1px solid $medium-grey-color;
  color: $grey-color;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color 0.4s ease;
  font-family: $secondary-font-family;
  font-size: $font-xs;
  margin-bottom: 8px;

  &:hover {
    background-color: $light-grey-color;
  }

  &--active {
    background-color: $medium-grey-color;
  }
}

.logo {
  height: 30px;
  text-align: center;
}

.empty-space {
  width: 50px;
}
</style>
