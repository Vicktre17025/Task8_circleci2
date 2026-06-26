const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://api.clickup.com/api/v2',
    env: {
      token: 'pk_210233017_YNJBMSJ3HQNR4W3DGFT0ARZIIF6RUFXB'
    }
  },
});
