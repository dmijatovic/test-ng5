
import { AppPage } from './app.po';
import { HomePage } from './home.po';


import { browser, by, element } from 'protractor';

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

  it('should navigate using menu',()=>{
    let mnu = page.getMenuBtn();

    mnu.click();
    //browser.pause();
  });

});


describe('Home page',()=>{
  let home: HomePage;
  let app: AppPage;

  beforeEach(() => {
    app = new AppPage();
    home = new HomePage();
  });


  it('should display home works!', () => {
    home.navigateTo();
    //expectation
    expect(home.getHomePageTitle()).toEqual("home works!");
  });

  it('should have counter component',()=>{
    let el = home.getFirstAppCounter();
    expect(el).toBeTruthy();
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
