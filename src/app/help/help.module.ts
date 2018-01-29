import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

import { Routes, RouterModule } from '@angular/router';

const routes=[{
  path:'help',
  component: StartComponent
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ StartComponent ]
})
export class HelpModule { }
