import { browser, by, element } from 'protractor';
import { HomePage } from './home.po';


describe('Home page',()=>{
  let home: HomePage;

  beforeEach(() => {
    home = new HomePage();
  });

  it('should have title home works!', () => {
    home.navigateTo();
    //expectation
    expect(home.getHomePageTitle()).toEqual("home works!");
  });

  it('should have 3 counter components',()=>{
    let counters = home.getAppCounters();
    expect(counters.count()).toEqual(3);
  });

  it('should increase counter by 1 using Up',()=>{
    let btn = home.getFirstAppCountUpBtn();
    btn.click();
    btn.click();
    expect(home.getMainCounterText()).toBe("2");
  });

  it('should decrease counter by 1 using Down',()=>{
    let btn = home.getFirstAppCountDownBtn();
    btn.click();
    expect(home.getMainCounterText()).toBe("1");
  });

});
