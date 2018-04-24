import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';
import { HomePage } from './home.po';

describe('App Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display AppTitle', () => {
    page.navigateTo();
    //stop browser and inspect elements
    //browser.pause();
    //expectation
    expect(page.getAppTitle()).toEqual(page.getDefinedTitle());
  });

  it('should have menu button', ()=>{
    expect(page.getMenuBtn()).toBeTruthy();
  });

  it('should have more than 1 menu item in the menu',()=>{
    let mnu = page.getMenuBtn();
    //click on menu to load menu items!
    mnu.click();

    //wait for 1 second
    browser.sleep(1000);

    //get items now!
    let mnuItems = page.getMenuItems();
    //check how manu items are there
    expect(mnuItems.count()).toBeGreaterThan(1);

  });

});
