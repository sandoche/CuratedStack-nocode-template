export const getLinks = async ($nuxtContent, slug) => {
  const links = await $nuxtContent('resources').fetch()
  return links
}
