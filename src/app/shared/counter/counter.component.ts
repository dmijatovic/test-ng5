import { 
  Component, OnInit, 
  Input, Output, EventEmitter 
} from '@angular/core';

import { CounterService } from './counter.service' 

@Component({
  selector: 'app-counter',
  providers: [ CounterService ],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() title:string;
  @Output() OneUpDownReset = new EventEmitter();
  //@Output() OneDown = new EventEmitter();
  //@Output() Reset = new EventEmitter();

  count:number=0;

  constructor(
    private counterSvc: CounterService
  ) { }

  ngOnInit() {
    this.count = this.counterSvc.count    
  }

  oneUp(){
    console.log("one up")
    this.count++;
    this.OneUpDownReset.next(1);
    this.counterSvc.setOnUpDownReset(1);
  }

  oneDown(){
    console.log("one down")
    this.count--;
    this.OneUpDownReset.next(-1);
    this.counterSvc.setOnUpDownReset(1);
  }

  reset(){
    console.log("reset")
    this.OneUpDownReset.next(- this.count);
    this.counterSvc.setOnUpDownReset(- this.count);
    this.count=0;
  }

}
