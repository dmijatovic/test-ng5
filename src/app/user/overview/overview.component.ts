import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  formMain:FormGroup;

  formGroups={
    name:{
      title:'Name',
      fields:[
        {name:'firstName', label:'FirstName', required:true },
        {name:'lastName', label:'LastName', required:true }
      ]
    },
    credentials:{
      title:"Credentials",
      fields:[{
        name:'username', label:'username', required:true, type:"text" 
      },{
        name:'times', label:'How many retries', required:true, type:"number" 
      },{
        name:'password', label:'password', required:true, type:'password' 
      }]
    }
  }

  constructor(
    private fb:FormBuilder
  ){ }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    let groups={}, glist=Object.keys(this.formGroups);
    
    //debugger
    glist.map((key)=>{
      let group = this.formGroups[key];
      let g = this.buildGroup(group.fields);
      groups[key] = g;
    });


    this.formMain = this.fb.group(groups);
  }

  buildGroup(fields){
    let g = new FormGroup({}) ; 

    fields.map((field)=>{
      let f:FormControl; 
      if (field.required){
        f = new FormControl("", Validators.required)
      }else{
        f = new FormControl("")
      }
      g.addControl(field.name, f);
    });

    return g;
  } 
}
