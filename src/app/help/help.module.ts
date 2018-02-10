import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

import { Routes, RouterModule } from '@angular/router';

import { HelpPageTemplate } from '../layout/help/help.component'

const routes=[{
  path:'help',
  component: HelpPageTemplate,
  children:[{
    path:'',
    component: StartComponent
  }]
  
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ StartComponent ]
})
export class HelpModule { }
