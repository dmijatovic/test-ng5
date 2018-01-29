import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2cComponent } from './feature2c.component';

describe('Feature2cComponent', () => {
  let component: Feature2cComponent;
  let fixture: ComponentFixture<Feature2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
