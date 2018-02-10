import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';


import { Routes, RouterModule } from '@angular/router';
import { UserPageTemplate } from '../layout/user/user.component';


const routes=[{
  path:'user',
  component:UserPageTemplate,
  children:[{
    path:'',
    component: OverviewComponent
  }]
  
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OverviewComponent]
})
export class UserModule { }
