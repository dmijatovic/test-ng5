import { browser, by, element, $ } from 'protractor';

import { app_config as cfg } from '../src/app/app.config';

import {} from '../src/app/'

export class UserPage {
  navigateTo() {
    return browser.get('/user');
  }

  getPageTitle(){
    return element(by.css('.page-title')).getText();
  }
  /* it seems to work only with Angular v1 ?!?
  getFirstNameInput(){
    return element(by.model("firstName"));
  }*/

  getFirstNameInput(){
    return element(by.id("firstName"));
  }

  getFormElement(){
    return element(by.css("form"));
  }

  addAllInfo(){
    //name
    element(by.id("firstName")).sendKeys("firstName");
    element(by.id("lastName")).sendKeys("lastName");
    //credentials
    element(by.id("username")).sendKeys("UserName");
    element(by.id("times")).sendKeys("3");
    element(by.id("password")).sendKeys("2323433");
    element(by.id("rememberMe")).click();
    //address
    let first = element.all(by.css("mat-radio-group mat-radio-button")).first();
    first.click();

    element(by.id("street")).sendKeys("StreetName");
    element(by.id("number")).sendKeys("12345");
    element(by.id("zipcode")).sendKeys("1234AA");

    //create elements
    element(by.css("mat-select#mat-select-0")).click();
    //select first element
    element(by.css("mat-option#mat-option-0")).click();
  }

}
