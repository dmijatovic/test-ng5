import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  //styleUrls: ['./start.component.scss'],
  host:{
    "class":"page-body"
  }
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
