const getLocale = (lang) => {
  const locale = require('../locales/' + lang + '.json')
  return locale
}

export default getLocale
