import { browser, by, element } from 'protractor';

import { app_config as cfg } from '../src/app/app.config';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getHomePageTitle(){
    return element(by.css('app-home p')).getText();
  }

  getMainCounterText(){
    return element(by.css('app-home .teller')).getText();
  }

  getFirstAppCounter(){
    //return element(by.css('[title="Tellerje 1"] .title')).getText();
    return element(by.css('app-counter'));
  }

  getFirstAppCountUpBtn(){
    return element(by.cssContainingText('button','Up'));
  }

  getFirstAppCountDownBtn(){
    return element(by.cssContainingText('button','Down'));
  }

}
