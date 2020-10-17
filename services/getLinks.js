export const getLinks = async ($nuxtContent, slug) => {
  console.log(slug)
  const links = await $nuxtContent('links')
    .where({ 'categories_slugs.slug': { $contains: slug } })
    .fetch()
  return links
}
