export const getLinks = async ($nuxtContent, slug) => {
  const links = await $nuxtContent('links')
    // .where({ categories_slugs: { $contains: slug } })
    .fetch()
  return links
}
