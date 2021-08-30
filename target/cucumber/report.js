$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Background.feature");
formatter.feature({
  "line": 2,
  "name": "Check the background change funtionality",
  "description": "",
  "id": "check-the-background-change-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 5621121400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the valid Techfios page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_valid_Techfios_page()"
});
formatter.result({
  "duration": 1166097700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify Button exists",
  "description": "",
  "id": "check-the-background-change-funtionality;verify-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters add as \"AutomationTesting1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the button1",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The background color will change to skyblue",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AutomationTesting1",
      "offset": 20
    }
  ],
  "location": "LoginStepDefinition.user_enters_add_as(String)"
});
formatter.result({
  "duration": 335334400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_the_button1()"
});
formatter.result({
  "duration": 2090664200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_background_color_will_change_to_skyblue()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.after({
  "duration": 465103000,
  "status": "passed"
});
formatter.before({
  "duration": 2240587100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the valid Techfios page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_valid_Techfios_page()"
});
formatter.result({
  "duration": 782538500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Button exists",
  "description": "",
  "id": "check-the-background-change-funtionality;verify-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User enters add as \"AutomationTesting\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on the button2",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The background color will change to white",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AutomationTesting",
      "offset": 20
    }
  ],
  "location": "LoginStepDefinition.user_enters_add_as(String)"
});
formatter.result({
  "duration": 240718100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_the_button2()"
});
formatter.result({
  "duration": 2079206300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.after({
  "duration": 265293900,
  "status": "passed"
});
});