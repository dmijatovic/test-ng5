import { browser, by, element } from 'protractor';
import { UserPage } from './user.po';


describe('User page',()=>{
  let page: UserPage, firstName="Dusan";

  beforeEach(() => {
    page = new UserPage();
  });

  it('should navigate to user page', () => {
    page.navigateTo();
    //wait for 2 seconds
    //browser.sleep(3000);
    //expectation
    expect(browser.getCurrentUrl()).toContain("/user");
  });

  it('should have page title User page', () => {
    //expectation
    expect(page.getPageTitle()).toEqual("User page");
  });

  it('should have firstName input',()=>{
    let el = page.getFirstNameInput();
    expect(el).toBeTruthy();
  });

  it(`should accept ${firstName} value into firstName`,()=>{
    let el = page.getFirstNameInput();
    el.sendKeys(firstName);
    //check if we have value?!?
    expect(el.getAttribute('value')).toBe(firstName);
  });

  it('should have ng-INVALID class when not all [required] info is provided',()=>{
    let f = page.getFormElement();
    expect(f.getAttribute('class')).toContain("ng-invalid");
  });

  it ('should have ng-VALID class after all info entered',()=>{
    page.addAllInfo();
    //browser.sleep(1000);
    let f = page.getFormElement();
    expect(f.getAttribute('class')).toContain("ng-valid");
  });

});
