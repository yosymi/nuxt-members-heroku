// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "heroku",
    storage: {
      "redis": {
        driver: "redis",
        url: process.env.REDIS_URL
      }
    }
  }
});
