import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';


import { Routes, RouterModule } from '@angular/router';

const routes=[{
  path:'user',
  component: OverviewComponent
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OverviewComponent]
})
export class UserModule { }
