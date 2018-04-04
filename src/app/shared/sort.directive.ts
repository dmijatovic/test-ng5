import { Component, Directive, EventEmitter, Input, Output, Host, Optional } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { util } from '../app.config';
import { SortService } from './sort.service';

@Directive({
  exportAs:'appSort',
  selector: '[appSort], appSort',
  providers: [ SortService ],
  outputs: [ 'colSortChange' ]
})
export class AppSortDirective {
  //object collection of sortables
  columns={};
  //currently registered column to sort
  colSortName:string;
  colSortDirection:string;
  //emit when sort change
  colSortChange = new EventEmitter();
  constructor() {
    console.log("SortDirective started...");
  }
  emitSortRequest(col){
    console.log("AppSortDirective...emitSortRequest...", col);
    this.colSortChange.emit(col);
  }
  register(col){
    //debugger
    let uid = util.createUid();
    //append column sort component to collection
    this.columns[uid] = col;
    //return uid to column so it knows its uid
    return uid;
  }
  unregister(uid){
    //debugger
    delete this.columns[uid];
  }
}

@Component({
  selector: 'app-col-sort',
  template: '<span>{{ colName }} {{ direction }}</span>',
  styles: [''],
  host:{
    '(click)': 'sortColumn()'
  }
})
export class AppColSort{
  @Input() colName:string;
  @Input() direction:string = "";
  @Output() colSort = new EventEmitter;

  uid:string="";
  sort$:Subscription;

  constructor(
    public sort: AppSortDirective,
    private sortSvc: SortService
  ){}

  ngOnInit(){
    this.registerToAppSortDirective();
    this.listenForSort();
  }
  registerToAppSortDirective(){
    this.uid = this.sort.register({
      col: this.colName,
      dir: this.direction
    });
  }
  listenForSort(){
    this.sort$ = this.sortSvc.sort$
    .subscribe((c:any)=>{
      //debugger
      //if sort is emited from other column
      if (this.uid != c.uid &&
        this.direction!=""){
        //we need to clean direction
        //other column requested ordering
        this.direction = "";
      }
    });
  }
  toggleDirection(){
    if (this.direction == "" || this.direction == 'desc'){
      return 'asc';
    }else {
      return 'desc';
    }
  }
  sortColumn(){
    //toggle direction
    this.direction = this.toggleDirection();

    //emit change using column emmitter
    this.colSort.emit({
      name: this.colName,
      dir: this.direction
    });

    //emit using directive emitter
    this.sort.emitSortRequest({
      uid: this.uid,
      col: this.colName,
      dir: this.direction
    });

    //emit using service
    this.sortSvc.setSort({
      uid: this.uid,
      col: this.colName,
      dir: this.direction
    });
  }
  ngOnDestroy(){
    this.sort.unregister(this.uid);
    this.sort$.unsubscribe();
  }
}
