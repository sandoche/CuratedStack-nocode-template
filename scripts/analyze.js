/* eslint-disable */
import { getLinks } from '../services/getLinks.js'

const analyze = function (links) {
  console.log('[analyze] - Starting')
  getCategoriesFromLinks(links)
  getDuplicatesLinks(links)
}

const getCategoriesFromLinks = (links) => {
  const categories = links.reduce((results, link) => {
    return results.concat(link.categories_slugs)
  }, [])

  const counts = {}
  let total = 0
  for (let i = 0; i < categories.length; i++) {
    counts[categories[i]] = 1 + (counts[categories[i]] || 0)
  }

  console.log('[analyze] - The links contains the following categories')
  console.log(counts)
}

const getDuplicatesLinks = (links) => {
  const urls = links.map((link) => {
    return link.url
  })

  console.log('[analyze] - Check duplicates URL')
  const counts = {}
  let duplicates = false
  for (let i = 0; i < urls.length; i++) {
    counts[urls[i]] = 1 + (counts[urls[i]] || 0)
    if (counts[urls[i]] > 1) {
      console.log('[analyze] - Duplicate URL: ' + urls[i])
      duplicates = true
    }
  }
  if (duplicates === false) {
    console.log('[analyze] - No duplicates found')
  }
}

const links = getLinks()
analyze(links)
