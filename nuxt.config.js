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
      { rel: 'icon', type: 'image/png', href: config.icon },
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

  postcss: {
    plugins: {
      'postcss-preset-env': this.preset,
      cssnano: { preset: 'default' } // disabled in dev mode
    },
    order: 'presetEnvAndCssnanoLast',
    preset: {
      stage: 2
    }
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
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
    },
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxtjs-darkmode-js-module',
    'nuxt-floating-prompt-module',
    [
      '@nuxtjs/google-gtag',
      {
        id: config.google_analytics
      }
    ]
  ],

  hooks: {
    ready(nuxt) {
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

  sitemap: {
    hostname: config.hostname
  },

  // https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName:
        config.icon.charAt(0) === '/' ? config.icon.substring(1) : config.icon
    },
    meta: {
      name: false,
      description: false,
      theme_color: '#908f9e',
      lang: 'en'
    },
    manifest: {
      name: config.title,
      short_name: config.shortname,
      description: config.description,
      background_color: '#908f9e'
    }
  },

  floatingPrompt: config.floatingPrompt.disabled
    ? false
    : config.floatingPrompt,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
