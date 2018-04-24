import { browser, by, element } from 'protractor';
import { F1aPage } from './feature1a.po';


describe('Feature1a page',()=>{
  let page: F1aPage;

  beforeEach(() => {
    page = new F1aPage();
  });

  it('should navigate to feature1a page', () => {
    page.navigateTo();
    //wait for 2 seconds
    browser.sleep(2000);
    //expectation
    expect(browser.getCurrentUrl()).toContain("/feature1/1a");
  });

  it('should have title feature1a works!', () => {
    //browser.sleep(2000);
    //expectation
    expect(page.getPageTitle()).toEqual("feature1a works!");
  });

  it('should have 3 tabs', () => {
    //page.navigateTo();
    let tabs = page.getTabs();
    //expectation
    expect(tabs.count()).toEqual(3);
  });

  it('should have 1 counter componnet',()=>{
    let counter = page.getAppCounter();
    expect(counter).toBeTruthy();
  })
});
