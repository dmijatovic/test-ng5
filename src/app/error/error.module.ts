import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

//routes
export const routes: Routes = [{
  path:'error',
  redirectTo: 'error/500',
  pathMatch: 'full'
},{
  path:'error/:eid',
  component: ErrorComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ErrorComponent
  ]
})
export class ErrorModule { }
