const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.stmechanic.com' },
    projectId: "wfeatf",
})

