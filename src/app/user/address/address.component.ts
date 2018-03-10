import { Component, OnInit, Input } from '@angular/core';

import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  host:{
    "class":"user-form-block"
  }
})
export class AddressComponent implements OnInit {
  @Input() title:string="";
  @Input() oFormElems=[];
  /*
  oFormElems=[
    {name:'username', label:'username', required:true, type:"text" },
    {name:'password', label:'password', required:true, type:'password' },
  ]*/
  constructor(
    public controlContainer:ControlContainer
  ) { }

  ngOnInit() {
  }

}
