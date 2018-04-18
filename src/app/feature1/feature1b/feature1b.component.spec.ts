import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Feature1bComponent } from './feature1b.component';
import { Feature1bService, colDef  } from './feature1b.service';
import { SharedModule } from '../../shared/shared.module';

//does not work properly
//when injected as provider
class FakeServiceStub{
  col=[1,2,3];
  rec=[{},{},{}];
  getId(){
    //return Observable.of('7');
    return new Observable((obs)=>{
      obs.next(this.col);
      obs.complete();
    })
  }
  getData1(id){
    return new Observable((obs)=>{
      obs.next(this.rec);
      obs.complete();
    })
  }
}

describe('Feature1bComponent', () => {
  let component: Feature1bComponent;
  let fixture: ComponentFixture<Feature1bComponent>;
  let svc: Feature1bService;
  let getId, getData1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ SharedModule ],
      declarations: [ Feature1bComponent ],
      /*providers:[
        { provide: Feature1bService, useClass: FakeServiceStub }
      ]*/
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(Feature1bComponent);
      component = fixture.componentInstance;
      svc = fixture.debugElement.injector.get(Feature1bService);
    });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return fake data after getId called', ()=>{
    let getId = spyOn(svc,'getId');
    let getData1 = spyOn(svc,'getData1');
    let fs = new FakeServiceStub();

    getId.and.returnValue(
      Observable.of('7')
    );
    getData1.and.returnValue(
      Observable.of({
        columns: fs.col,
        records: fs.rec
      })
    )
    //expect(spyOn(svc,'getData1')).toHaveBeenCalledWith("101");
    //expect(spyOn(svc,'getData1')).toHaveBeenCalled;
    fixture.detectChanges();
    //component.getDataSequential();
    //console.log("columns...", component.columns);
    expect(component.columns).toBe(fs.col);
  });
});
