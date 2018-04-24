import { browser, by, element } from 'protractor';

export class F1aPage {
  navigateTo() {
    browser.get('/feature1/1a');
  }

  getPageTitle(){
    return element(by.css('.page-title')).getText();
  }

  getTabs(){
    return element.all(by.css(".mat-tab-links a"));
  }

  getAppCounter(){
    return element.all(by.tagName("app-counter"));
  }

}
