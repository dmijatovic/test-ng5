import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class CounterService {

  constructor() { }

  count:6

  OnUpDownReset = new Subject();
  OnUpDownReset$ = this.OnUpDownReset.asObservable();
  setOnUpDownReset(num){
    this.OnUpDownReset.next(num);    
  }

  


}
