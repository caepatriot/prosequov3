const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    allowedHosts: 'all'
  },
  publicPath: process.env.NODE_ENV === "production" ? "/prosequov3/" : "/",
})
