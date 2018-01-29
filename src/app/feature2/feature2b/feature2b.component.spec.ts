import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2bComponent } from './feature2b.component';

describe('Feature2bComponent', () => {
  let component: Feature2bComponent;
  let fixture: ComponentFixture<Feature2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
