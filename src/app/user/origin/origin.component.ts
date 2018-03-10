import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss'],
  host:{
    "class":"user-form-block"
  }
})
export class OriginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
