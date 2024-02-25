const { defineConfig } = require("cypress");
const fs = require('fs')
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //!Cypress Cucumber Preprocessor
      on('file:preprocessor', cucumber())

      //!Check file availability
      on("task", {
        checkFileExists(filename) {
          if (fs.existsSync(filename)) {
            return true;
          }
          return false;
        },
      });
    },
    specPattern: "**/login.feature",
    env: { ...process.env },
  },
  experimentalSessionAndOrigin: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  watchForFileChanges: false,
  viewportWidth: 2000,
  viewportHeight: 1000,
  defaultCommandTimeout: 30000,
});
