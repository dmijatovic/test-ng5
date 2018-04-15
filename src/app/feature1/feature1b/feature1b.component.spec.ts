import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1bComponent } from './feature1b.component';

xdescribe('Feature1bComponent', () => {
  let component: Feature1bComponent;
  let fixture: ComponentFixture<Feature1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
