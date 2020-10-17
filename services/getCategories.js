const categories = [
  {
    slug: 'open-source',
    name: 'Open Source',
    description: 'best free open source tools for your next projects',
    icon: '🔨'
  },
  {
    slug: 'productivity',
    name: 'Productivity',
    description: 'best free productivity tools',
    icon: '⌚'
  }
]

export function getCategoriesMenu(slug) {
  const categoriesClone = Object.assign([], categories)
  const indexOfSlug = categoriesClone.indexOf(getCategories(slug)[0])
  const firstPart = categoriesClone.splice(indexOfSlug)
  return firstPart.concat(categoriesClone)
}

export function getCategories(slug) {
  return categories.filter((item) => {
    if (!slug) {
      return true
    } else {
      return item.slug === slug
    }
  })
}
