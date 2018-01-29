import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2aComponent } from './feature2a.component';

describe('Feature2aComponent', () => {
  let component: Feature2aComponent;
  let fixture: ComponentFixture<Feature2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
