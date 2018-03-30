import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class Feature1Service {

  constructor() { }

  count:6;

  OnUpDownReset = new Subject();
  OnUpDownReset$ = this.OnUpDownReset.asObservable();
  setOnUpDownReset(num){
    this.OnUpDownReset.next(num);
  }

  tab1cnt=0;
  tab1OnUpDownReset = new Subject();
  //tab1OnUpDownReset = new BehaviorSubject(this.tab1cnt);
  tab1OnUpDownReset$ = this.tab1OnUpDownReset.asObservable();
  tab1SetOnUpDownReset(num){
    this.tab1cnt=+num;
    this.tab1OnUpDownReset.next(num);
    console.log("feature1a..tab1cnt...", this.tab1cnt);
  }
  tab1GetCount(){
    return this.tab1cnt;
  }
}


export const navLinks=[{
  path:'tab1',
  label:'Tab 1',
  mdIcon:'home'
},{
  path:'tab2',
  label:'Tab 2',
  mdIcon:'help'
},{
  path:'tab3',
  label:'Tab 3',
  mdIcon:'info'
}]
