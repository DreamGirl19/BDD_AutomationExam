package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;	
	}

	//Element Library
	@FindBy(how = How.XPATH, using = "/html/body/div[4]/input[2]")
	WebElement Add;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
	WebElement SetSkyBlueBackground_Button;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	WebElement SetWhiteBackground_Button;
	
	//Methods to interact with the Elemnets
	public void enterAdd(String add) {
		Add.sendKeys(add);
	}
	
	public void clickSetSkyBlueBackground_Button() {
		SetSkyBlueBackground_Button.click();
	}
	
	public void clickSetWhiteBackground_Button() {
		SetWhiteBackground_Button.click();
	}
	
	public void login(String add) {
		Add.sendKeys(add);
		SetSkyBlueBackground_Button.click();
		SetWhiteBackground_Button.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();
	}
}

