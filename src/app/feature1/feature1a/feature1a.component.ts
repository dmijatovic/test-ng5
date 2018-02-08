import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Feature1Service } from './feature1a.service';


@Component({
  selector: 'app-feature1a',
  providers:[Feature1Service],
  templateUrl: './feature1a.component.html',
  styleUrls: ['./feature1a.component.css']
})
export class Feature1aComponent implements OnInit {
  title:string="Main counter";
  count=0;
  OnUpDownReset$:Subscription
  constructor(
    private counterSvc:Feature1Service
  ) { }

  ngOnInit() {
    this.OnUpDownReset$ = this.counterSvc.OnUpDownReset$
    .subscribe((n)=>{
      this.onOneUpDownReset(n);
    })
  }

  onOneUpDownReset(num){
    console.log("num...", num)
    this.count+=num;
  }

}


