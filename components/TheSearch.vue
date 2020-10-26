<template>
  <div class="the-search">
    <lunr-search lang="en">
      <template v-slot:default="{ result, maxScore, meta }">
        <a :href="meta.url">
          {{ meta.name }}
        </a>
      </template>
    </lunr-search>
  </div>
</template>

<script>
export default {
  components: {
    LunrSearch: () => import('lunr-module/search')
  }
}
</script>

<style lang="scss" scoped>
.the-search {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
