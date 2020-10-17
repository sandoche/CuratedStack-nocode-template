<template>
  <nuxt-link :to="`/${slug}/`" class="category-item">
    <p class="icon">
      {{ icon }}
    </p>
    <p class="name">
      {{ name }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.category-item {
  display: flex;
  background-color: #fff;
  padding: 42px 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  border: 1px solid $medium-grey-color;
  box-shadow: 0 4px 24px rgba(32, 43, 54, 0.08);
  color: $text-color;
  transform: translateX(0) translateY(0) translateZ(0);
  transition: all 0.4s ease;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateX(0) translateY(-8px) translateZ(0);
    box-shadow: 0 8px 24px rgba(32, 43, 54, 0.12);
  }
}

.icon {
  font-size: $font-xl;
  margin: 0;
}

.name {
  font-size: $font-sm;
  margin-bottom: 0;
  font-family: $secondary-font-family;
}
</style>
