import { browser, by, element } from 'protractor';

export class F1bPage {
  navigateTo() {
    browser.get('/feature1/1b');
  }

  getPageTitle(){
    return element(by.css('app-feature1b p')).getText();
  }

  getTableRows(){
    return element.all(by.css('tr'));
  }
}
