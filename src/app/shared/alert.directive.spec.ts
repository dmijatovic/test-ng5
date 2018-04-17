
import { AlertDirective } from './alert.directive';
import { Component, OnInit, OnDestroy, ElementRef, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//stub component
@Component({
  selector: 'app-test-component',
  template: `
    <div class="alert"
      appAlert [colDef]="col"
      [cellValue]="testVal">{{testVal}}
    </div>
  `
})
export class TestComponent {
  col={
    treshold:3000
  }
  testVal=2000;
  constructor(){}
}


fdescribe('AlertDirective', () => {
  let fixture:ComponentFixture<TestComponent>,
    fe:DebugElement, el:HTMLElement;

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[ TestComponent, AlertDirective ]
    })
    .compileComponents();
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(TestComponent);
    fe = fixture.debugElement.query(By.css(".alert"));
    el = fe.nativeElement;
  });

  it('should add alert class when treshold > cellValue', () => {
    //get reference to component
    let component = fixture.componentInstance;
    //change values
    component.col.treshold = 3000;
    component.testVal = 2000;
    //refresh
    fixture.detectChanges();
    //assert expectation
    expect(el.classList).toContain("custom-alert-class");
  });

  it('should NOT add alert class when treshold <= cellValue', () => {
    //get reference to component
    let component = fixture.componentInstance;
    //change values
    component.col.treshold = 2000;
    component.testVal = 2000;
    //refresh
    fixture.detectChanges();
    //assert expectation
    expect(el.classList).not.toContain("custom-alert-class");
  });

});
