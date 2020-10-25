export const getLinks = async ($nuxtContent, slug) => {
  const allLinks = await $nuxtContent('links').fetch()

  // Using filter instead of nuxtContent where because of an error
  // check https://github.com/nuxt/content/issues/581
  return allLinks.filter((item) => {
    return item.categories_slugs.includes(slug)
  })
}
