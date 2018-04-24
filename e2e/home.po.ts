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

  getAppCounters(){
    return element.all(by.css('app-counter'))
  }

  getFirstAppCounter(){
    //return element(by.css('[title="Tellerje 1"] .title')).getText();
    return element.all(by.css('app-counter')).get(0);
  }

  getFirstAppCountUpBtn(){
    return element.all(by.cssContainingText('button','Up')).get(0);
  }

  getFirstAppCountDownBtn(){
    return element.all(by.cssContainingText('button','Down')).get(0);
  }

}
