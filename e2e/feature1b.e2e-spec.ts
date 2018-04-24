import { browser, by, element } from 'protractor';
import { F1bPage } from './feature1b.po';


describe('Feature1b page',()=>{
  let page: F1bPage;

  beforeEach(() => {
    page = new F1bPage();
  });

  it('should navigate to feature1b overview page', () => {
    page.navigateTo();
    //wait for 2 seconds
    //browser.sleep(2000);
    //expectation
    expect(browser.getCurrentUrl()).toContain("/feature1/1b/overview");
  });

  it('should have title feature1b overview works!', () => {
    //browser.sleep(2000);
    //expectation
    expect(page.getPageTitle()).toEqual("feature1b overview works!");
  });

  it('should have table with some dummy records',()=>{
    //wait for 10 secs
    //browser.sleep(2000);
    //browser.wa
    let rows = page.getTableRows();
    //expect some dummy data rows
    expect(rows.count()).toBeGreaterThan(0);
  });

});
