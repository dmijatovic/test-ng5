import { browser, by, element } from 'protractor';

import { app_config as cfg } from '../src/app/app.config';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle(){
    return element(by.css('.app-title')).getText();
  }

  getDefinedTitle(){
    return cfg.appTitle;
  }

  getMenuBtn(){
    return element(by.css('.app-nav button'));
  }

  getMenuItems(){
    return element.all(by.css('.mat-menu-item'));
  }
}
