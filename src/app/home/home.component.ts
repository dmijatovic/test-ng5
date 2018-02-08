import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string="Main counter";
  count:number=0;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    console.log("router...", this.router);
  }
  onOneUpDownReset(num){
    console.log("number...", num);
    this.count+=num;
  }
}
