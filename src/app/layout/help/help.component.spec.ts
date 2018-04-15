import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPageTemplate } from './help.component';

xdescribe('HelpPageTemplate', () => {
  let component: HelpPageTemplate;
  let fixture: ComponentFixture<HelpPageTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPageTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
