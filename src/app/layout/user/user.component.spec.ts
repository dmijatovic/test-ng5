import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageTemplate } from './user.component';

xdescribe('UserPageTemplate', () => {
  let component: UserPageTemplate;
  let fixture: ComponentFixture<UserPageTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
