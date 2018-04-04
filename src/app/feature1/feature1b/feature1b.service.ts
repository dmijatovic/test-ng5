import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RandomData } from '../../shared/rdd.svc';

const data={
  columns:[
    { id:'col1', name:'Col 1', sort:'', type:'string' },
    { id:'col2', name:'Col 2', sort:'', type:'date' },
    { id:'col3', name:'Col 3', sort:'', type:'float', treshold:20000 },
    { id:'col4', name:'Col 4', sort:'', type:'integer', treshold:50000 }
  ],
  records:[
    {col1:'Data rec 1, col1', col2:'1970-25-11', col3:"1.5456", col4: null},
    {col1:'Data rec 1, col1', col2:'1970-25-11', col3:"1.5456", col4: null},
    {col1:'Data rec 1, col1', col2:'1970-25-11', col3:"1.5456", col4: null},
    {col1:'Data rec 1, col1', col2:'1970-25-11', col3:"1.5456", col4: null}
  ]
}

export const colDef=[
  { id:'col1', name:'Col 1', sort:'', type:'string'},
  { id:'col2', name:'Col 2', sort:'', type:'date' },
  { id:'col3', name:'Col 3', sort:'', type:'float' },
  { id:'col4', name:'Col 4', sort:'', type:'integer'}
]


@Injectable()
export class Feature1bService {
  constructor(){
    console.log('Feature1bService...started');
  }
  /**
   * Simulate id request
   */
  getId(){
    return new Observable((obs)=>{
      setTimeout(()=>{
        obs.next("12345");
        obs.complete();
      },2000);
    });
  }
  /**
   * Simulate data request based on id
   * @param id
   */
  getData1(id){
    console.log("generate data for record id...", id);
    return new Observable((obs)=>{
      let d = RandomData.generate(
        data.columns, 20
      );
      setTimeout(()=>{
        obs.next(d);
        obs.complete();
      },500);
    });
  }

  getData2(col, rec){
    return new Observable((obs)=>{
      let d = RandomData.generate(
        col, rec
      );
      setTimeout(()=>{
        obs.next(d);
        obs.complete();
      },500);
    });
  }

  getData3(){
    return new Observable((obs)=>{
      let d = RandomData.generate(
        data.columns, 120
      );
      obs.next(d);
      obs.complete();
    });
  }
}
