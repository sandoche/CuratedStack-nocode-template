import links from '../content/links.json'

export function getLinks(slug) {
  return links.filter((item) => {
    return item.categories_slugs.includes(slug)
  })
}
