import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() title;

  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  oneUp(){
    console.log("one up");
    this.count++;
  }
  oneDown(){
    console.log("one down");
    this.count--;
  }
  reset(){
    console.log("reset");
    this.count=0;
  }

}
