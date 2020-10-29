<template>
  <div class="the-search">
    <lunr-search lang="en">
      <template v-slot:default="{ meta }">
        <a :href="meta.url" @click="openLink(meta.url)">
          <div class="the-search__result">
            <img v-if="meta.icon" :src="meta.icon" :alt="meta.name" />
            <div v-else class="icon--placeholder">
              {{ meta.name | firstLetter }}
            </div>
            <span>{{ meta.name }}</span>
          </div>
        </a>
      </template>
    </lunr-search>
  </div>
</template>

<script>
export default {
  components: {
    LunrSearch: () => import('lunr-module/search')
  },
  filters: {
    firstLetter(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0)
    }
  },
  methods: {
    openLink(link) {
      window.location.href = link
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.the-search {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 14px;
  }

  &__result {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    grid-gap: 8px;
    padding: 4px;

    img {
      height: auto;
      width: 100%;
    }
  }
}

.icon {
  &--placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $grey-color;
    font-weight: 900;
  }
}
</style>

<style lang="scss">
.lunr-search {
  width: 100%;
  max-width: 400px;

  input {
    width: 100%;
  }
}

.lunr-results {
  width: 100% !important;
  z-index: 600;
  box-shadow: 0 4px 24px rgba(32, 43, 54, 0.08);
}

.lunr-status {
  font-size: 14px;
  width: 100% !important;
}

.lunr-result {
  cursor: pointer;
  padding: 4px 0;
  display: none;
  &:first-of-type,
  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5) {
    display: block;
  }
}
</style>
