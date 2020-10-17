export async function getCategoriesMenu(nuxtContent, slug) {
  const categories = await nuxtContent('categories').fetch()
  const categoriesClone = Object.assign([], categories)
  const indexOfSlug = categoriesClone.indexOf(getCategories(slug)[0])
  const firstPart = categoriesClone.splice(indexOfSlug)
  return firstPart.concat(categoriesClone)
}

export async function getCategories(nuxtContent) {
  const categories = await nuxtContent('categories').fetch()
  return categories
}

export async function getCategory(nuxtContent, slug) {
  const categories = await nuxtContent('categories').where({ slug }).fetch()
  return categories.length > 0 ? categories[0] : null
}
