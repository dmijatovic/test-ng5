import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2aComponent } from './feature2a/feature2a.component';
import { Feature2bComponent } from './feature2b/feature2b.component';
import { Feature2cComponent } from './feature2c/feature2c.component';

import { Routes, RouterModule } from '@angular/router';

const routes=[{
  path:'f2a',
  component: Feature2aComponent
},{
  path:'f2b',
  component: Feature2bComponent
},{
  path:'f2c',
  component: Feature2cComponent
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Feature2aComponent, Feature2bComponent, Feature2cComponent]
})
export class Feature2Module { }
