import categoriesObject from '../content/categories.json'

const categories = categoriesObject.categories

export const getCategoriesMenu = (slug) => {
  const categoriesClone = Object.assign([], categories)
  const indexOfSlug = categoriesClone.indexOf(getCategories(slug)[0])
  const firstPart = categoriesClone.splice(indexOfSlug)
  return firstPart.concat(categoriesClone)
}

export const getCategories = (slug) => {
  return categories.filter((item) => {
    if (!slug) {
      return true
    } else {
      return item.slug === slug
    }
  })
}
