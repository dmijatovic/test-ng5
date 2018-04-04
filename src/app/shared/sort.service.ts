import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class SortService {
  constructor(){
    console.log('SortService...started');
  }
  sort = new Subject();
  sort$ = this.sort.asObservable();
  setSort(col){
    this.sort.next(col);
  }
}
