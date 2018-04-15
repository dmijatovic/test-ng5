import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1aComponent } from './feature1a.component';

xdescribe('Feature1aComponent', () => {
  let component: Feature1aComponent;
  let fixture: ComponentFixture<Feature1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
