// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
     '@sidebase/nuxt-auth',
    '@vee-validate/nuxt',
    '@pinia/nuxt', 
    ],

  pinia: {
    storesDirs: ['./store/**']
  },

  plugins: [
    '~/plugins/vee-validate.js',
  ],

  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
    "@/assets/styles/global.css",
  ],

  build: {
    transpile: ["primevue"],
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },

  auth: {
    baseURL: process.env.API_URL,
    session: {
      enableRefreshOnWindowFocus: false,
      enableRefreshPeriodically: false,
    },
    globalAppMiddleware: {
      isEnabled: true
    },
    provider: {
      type: 'local',
      pages: {
        login: "/auth/login",
      },
      endpoints: {
        signIn: { path: "/login", method: 'post' }, //get token
        signOut: { path: "", method: "get" },
        // getSession: { path: "/refresh-token" }
      },
      token: {
        // signInResponseTokenPointer: '/token',
        maxAgeInSeconds: 60 * 60 * 24 * 2
      },

    },
  },

  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL
    },
  },


})
