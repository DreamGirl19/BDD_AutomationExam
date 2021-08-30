package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPageObj;

	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given("^User is on the valid Techfios page$")
	public void user_is_on_the_valid_Techfios_page() {
		driver.get("https://techfios.com/test/101/");
	}
	@When("^User enters add as \"([^\"]*)\"$")
	public void user_enters_add_as(String add) {
		loginPageObj.enterAdd(add);
	}
	
	@Then("^User click on the button1$")
	public void user_click_on_the_button1() throws Throwable {
		loginPageObj.clickSetSkyBlueBackground_Button();
		Thread.sleep(2000);
	}
	
	@And("^The background color will change to skyblue$")
	public void the_background_color_will_change_to_skyblue() {
		//loginPageObj.clickSetSkyBlueBackground_Button();
	}
	
	@When("^User click on the button2$")
	public void user_click_on_the_button2() throws Throwable {
		loginPageObj.clickSetWhiteBackground_Button();
	Thread.sleep(2000);
	}
	
	@Then("^The background color will change to white$")
	public void the_background_color_will_change_to_white() {
		//loginPageObj.clickSetWhiteBackground_Button();
	}
	
	@After
	public void teardown() {
		driver.close();
	}
}