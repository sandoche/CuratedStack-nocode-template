import getConfig from './services/getConfig'
import getLocale from './services/getLocale'
import { getLinks } from './services/getLinks'

const config = getConfig()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap'
      }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/style/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    {
      src: '@nuxtjs/lunr-module',
      options: {
        ref: 'id',
        fields: ['name', 'description', 'tags'],
        css: true
      }
    }
  ],

  hooks: {
    async ready(nuxt) {
      const links = getLinks()
      let i = 0

      for (const link of links) {
        const document = {
          locale: 'en',
          document: {
            id: String(i),
            name: link.name,
            description: link.description,
            tags: link.categories_slugs.join(' ')
          },
          meta: {
            name: link.name,
            url: link.url,
            icon: link.icon
          }
        }
        
        i++
        nuxt.callHook('lunr:document', document)
      }
    }
  },

  // https://i18n.nuxtjs.org/
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: getLocale('en')
      }
    }
  },

  // https://google-analytics.nuxtjs.org
  googleAnalytics: {
    id: config.google_analytics
  }

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
