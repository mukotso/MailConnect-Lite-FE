// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss',
     '@sidebase/nuxt-auth'
    ],

  pinia: {
    storesDirs: ['./store/**']
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
        getSession: { path: "/refresh-token" }
      },
      token: {
        signInResponseTokenPointer: '/token',
        maxAgeInSeconds: 60 * 60 * 24 * 2
      },

    },
  },


})
