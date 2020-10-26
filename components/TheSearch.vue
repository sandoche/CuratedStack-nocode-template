<template>
  <lunr-search lang="en">
    <template v-slot:default="{ result, maxScore, meta }">
      <a :href="meta.url">
        {{ meta.name }}
      </a>
    </template>
  </lunr-search>
</template>

<script>
export default {
  components: {
    LunrSearch: () => import('lunr-module/search')
  }
}
</script>
