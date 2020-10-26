<template>
  <div>
    <TheHeader :title="title" :description="description" />
    <div class="container home-search">
      <TheSearch />
    </div>
    <section class="tools">
      <div class="container">
        <h2 class="section-title">
          {{ sectionTitle }}
        </h2>
        <p class="section-description">
          {{ sectionDescription }}
        </p>
        <div class="categories">
          <CategoryItem
            v-for="(category, index) in categories"
            :key="index"
            :slug="category.slug"
            :name="category.name"
            :icon="category.icon"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheSearch from '~/components/TheSearch.vue'
import CategoryItem from '~/components/CategoryItem.vue'
import { getCategories } from '~/services/getCategories'

export default {
  name: 'Index',
  components: {
    TheHeader,
    CategoryItem,
    TheSearch
  },
  asyncData({ app }) {
    const categories = getCategories()

    return {
      title: app.i18n.t('title'),
      description: app.i18n.t('description'),
      sectionTitle: app.i18n.t('tools.title'),
      sectionDescription: app.i18n.t('tools.description'),
      categories
    }
  },
  head() {
    return {
      title: `${this.title} | ${this.description}`,
      meta: [{ name: this.title, content: this.description }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.home-search {
  margin-top: -32px;
  margin-bottom: 32px;
}

.tools {
  background-color: $light-grey-color;
  padding: 64px 0;
}

.categories {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
}
</style>
