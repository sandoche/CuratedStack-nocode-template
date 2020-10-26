<template>
  <div class="the-search">
    <lunr-search lang="en">
      <template v-slot:default="{ meta }">
        <a :href="meta.url" @click="openLink(meta.url)">
          <div class="the-search__result">
            <img :src="meta.icon" :alt="meta.name" />
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
  methods: {
    openLink(link) {
      window.location.href = link
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>

<style lang="scss">
.lunr-search {
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-bottom: 64px;
  margin-top: -32px;

  input {
    width: 100%;
  }
}

.lunr-results {
  width: 100% !important;
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
