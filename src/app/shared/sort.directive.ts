import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: 'col-sort',
  inputs: ['col-sort-name'],
  outputs: ['colSortChange']
})
export class SortDirective {
  colSortName:string;
  colSortChange = new EventEmitter();
  constructor() {
    console.log("SortDirective started...", this.colSortName);
  }
}


@Component({
  selector: 'app-col-sort',
  template: '<span>{{ colName }} sortIt</span>',
  styles: [''],
  host:{
    '(click)': 'sortColumn()'
  }
})
export class AppColSort {
  @Input() colName:string;
  @Output() colSort = new EventEmitter;

  direction:string = "";

  constructor(){}

  ngOnInit(){
    /*setTimeout(()=>{
      this.sortColumn();
    }, 5000);*/
  }

  onClick(e){
    console.log("clicked...", e);
  }

  toggleDirection(){
    if (this.direction == "" || this.direction == 'desc'){
      this.direction = 'asc';
    }else {
      this.direction = 'desc';
    }
  }

  sortColumn(){
    //set direction
    this.toggleDirection();
    //emit change
    this.colSort.emit({
      name: this.colName,
      dir: this.direction
    });
  }

  ngOnDestroy(){}
}
