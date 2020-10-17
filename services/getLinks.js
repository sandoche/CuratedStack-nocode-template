export const getLinks = async ($nuxtContent, slug) => {
  console.log(slug)
  const links = await $nuxtContent('links')
    .where({ categories_slugs: { $contains: slug } })
    .fetch()
  return links
}
