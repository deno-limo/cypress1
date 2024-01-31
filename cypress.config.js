const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc-app-for-testing.surge.sh'
  }
})

