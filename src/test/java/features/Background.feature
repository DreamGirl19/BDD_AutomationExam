@BackgroundFeature @Regression
Feature: Check the background change funtionality 

Background: 
	Given User is on the valid Techfios page 
	
@Smoke
Scenario: Verify Button exists
	When User enters add as "AutomationTesting1"             
	Then User click on the button1  
	And The background color will change to skyblue  

@Smoke
Scenario: Verify Button exists  
	When User enters add as "AutomationTesting"       
	Then User click on the button2       
	And The background color will change to white 
	