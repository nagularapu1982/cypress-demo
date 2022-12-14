const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "env": {
       "url1":"https://shop.demoqa.com/my-account/",
     

      "UAT": {
        "user":{
          "User1":"UAT-uaer1",
          "url":"https://shop.demoqa.com/my-account/",
          "Password":"UAT_Password"
        },
          },
       "QA": {
        "user":"QA_UserName",
        "Password":"QA_Password"
          },
      },
      screenshotOnRunFailure: false,
      screenshotsFolder: 'cypress/screenshots1',


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
