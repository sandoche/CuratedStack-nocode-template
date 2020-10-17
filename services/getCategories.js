export const getCategoriesMenu = async ($nuxtContent, slug) => {
  const categories = await $nuxtContent('categories').fetch()
  const categoriesClone = Object.assign([], categories)
  const indexOfSlug = categoriesClone.indexOf(getCategories($nuxtContent, slug))
  const firstPart = categoriesClone.splice(indexOfSlug)
  return firstPart.concat(categoriesClone)
}

export const getCategories = async ($nuxtContent) => {
  const categories = await $nuxtContent('categories').fetch()
  return categories
}

export const getCategory = async ($nuxtContent, slug) => {
  const categories = await $nuxtContent('categories').where({ slug }).fetch()
  return categories.length > 0 ? categories[0] : null
}
