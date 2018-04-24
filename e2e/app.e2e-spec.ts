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

  it('should navigate using menu',()=>{
    let mnu = page.getMenuBtn();

    mnu.click();
    //browser.pause();
  });

});
