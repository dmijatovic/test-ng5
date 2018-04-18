import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

import { app_config as cfg } from '../../app.config';

//material
import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { MainPageTemplate } from './main.component';

fdescribe('MainPageTemplate', () => {
  let component: MainPageTemplate;
  let fixture: ComponentFixture<MainPageTemplate>;
  let router:RouterTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ MainPageTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageTemplate);
    component = fixture.componentInstance;
    router = TestBed.get(RouterTestingModule);
  });

  it('should create MainPageTemplate', () => {
    expect(component).toBeTruthy();
  });

  it('should have router-outlet',()=>{
    let r = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(r).toBeTruthy();
  });

});
