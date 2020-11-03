<template>
  <div>
    <TheNavbar :categories="categories" :slug="slug" />
    <TheHeader
      :title="category.name"
      :description="category.description"
      :icon="category.icon"
      :count="links.length"
    />
    <div class="resources">
      <div class="container block">
        <ResourceItem
          v-for="(link, index) in links"
          :key="index"
          :url="link.url"
          :name="link.name"
          :description="link.description"
          :icon="link.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheHeader from '~/components/TheHeader.vue'
import ResourceItem from '~/components/ResourceItem.vue'
import { getLinks } from '~/services/getLinks'
import { getCategories, getCategoriesMenu } from '~/services/getCategories'
import getConfig from '~/services/getConfig'

export default {
  name: 'Category',
  components: {
    TheNavbar,
    TheHeader,
    ResourceItem
  },
  asyncData({ params }) {
    const slug = params.slug
    return {
      slug,
      links: getLinks(slug),
      category: getCategories(slug)[0],
      categories: getCategoriesMenu(slug)
    }
  },
  head() {
    const config = getConfig()
    return {
      title: `${config.title} | ${this.category.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.links.length + ' ' + this.category.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.links.length + ' ' + this.category.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables';

.resources {
  background-color: $light-grey-color;
  padding: 64px 0;
}

.block {
  display: block;
  padding: 16px 32px;
  background-color: #fff;
  border: 1px solid $medium-grey-color;
  box-shadow: 0 4px 24px rgba(32, 43, 54, 0.08);
  border-radius: 3px;
}
</style>
