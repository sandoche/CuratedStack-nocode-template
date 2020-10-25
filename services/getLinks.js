import links from '../content/links.json'

export function getLinks(slug) {
  if (slug) {
    return links.filter((item) => {
      return item.categories_slugs.includes(slug)
    })
  } else {
    return links
  }
}
