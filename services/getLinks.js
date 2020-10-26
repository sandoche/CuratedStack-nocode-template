import linksObject from '../content/links.json'

const links = linksObject.links

export function getLinks(slug) {
  if (slug) {
    return links.filter((item) => {
      return item.categories_slugs.includes(slug)
    })
  } else {
    return links
  }
}
