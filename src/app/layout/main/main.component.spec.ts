import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTemplate } from './main.component';

xdescribe('MainPageTemplate', () => {
  let component: MainPageTemplate;
  let fixture: ComponentFixture<MainPageTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
