import { Component, OnInit } from '@angular/core';

import { Feature1Service } from '../feature1a.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  count=3;
  tab1OnUpDownReset$:Subscription;
  constructor(
    private f1aSvc: Feature1Service
  ) { }

  ngOnInit() {
    this.count = this.f1aSvc.tab1GetCount();
    this.listenForOnUpDownRest();
  }
  listenForOnUpDownRest(){
    this.tab1OnUpDownReset$=this.f1aSvc.tab1OnUpDownReset$
    .subscribe((num:any)=>{
      debugger
      this.count+=num;
    });
  }
  onOneUpDownReset(num){
    console.log("tab1...", num);
    this.f1aSvc.tab1SetOnUpDownReset(num);
  }


}
