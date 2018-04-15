import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  let debugEl:DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment local count variable',()=>{
    component.oneUp();
    expect(component.count).toBe(1);
  });

  it('should decrement local count variable',()=>{
    component.oneDown();
    expect(component.count).toBe(-1);
  });

  it('should reset local count variable',()=>{
    component.reset();
    expect(component.count).toBe(0);
  });

  it('should display incremented value',()=>{
    //get count element from component template
    debugEl = fixture.debugElement.query(By.css(".count"));
    htmlEl = debugEl.nativeElement;

    component.oneUp();
    //propagate all changes
    fixture.detectChanges();
    //implement test
    expect(htmlEl.textContent.trim()).toBe("1");
  });

  it('should display decremented value',()=>{
    //get count element from component template
    debugEl = fixture.debugElement.query(By.css(".count"));
    htmlEl = debugEl.nativeElement;

    component.oneDown();
    //propagate all changes
    fixture.detectChanges();
    //implement test
    expect(htmlEl.textContent.trim()).toBe("-1");
  });

  it('should emit OneUpDownReset value on oneUp/oneDown/reset',()=>{
    let data = null;
    //subscribe to event emitter
    component.OneUpDownReset.subscribe((d)=>{
      data = d;
    });
    //oneUp emits value 1
    component.oneUp();
    expect(data).toBe(1);
    //reset returns negative value of this.count
    component.reset();
    expect(data).toBe(-1);
    //oneDown emits -1 value
    component.oneDown();
    expect(data).toBe(-1);
  });

});
