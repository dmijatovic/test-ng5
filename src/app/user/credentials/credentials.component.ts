import { Component, OnInit, Input } from '@angular/core';

import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
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
