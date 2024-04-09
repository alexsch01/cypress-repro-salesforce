const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        supportFile: false,
    },
    screenshotOnRunFailure: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    includeShadowDom: true,
});
