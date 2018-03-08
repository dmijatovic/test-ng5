import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  oFormElems=[
    {name:'firstName', label:'FirstName', required:true },
    {name:'lastName', label:'LastName', required:true },
  ]

  constructor() { }

  ngOnInit() {
  }

}
