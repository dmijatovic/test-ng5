//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//material
import { MatTabsModule, MatIconModule } from '@angular/material';
//app modules
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
//components
import { Feature1aComponent } from './feature1a/feature1a.component';
import { Feature1bComponent } from './feature1b/feature1b.component';
import { Tab1Component } from './feature1a/tab1/tab1.component';
import { Tab2Component } from './feature1a/tab2/tab2.component';
import { Tab3Component } from './feature1a/tab3/tab3.component';
import { ViewComponent } from './feature1b/view/view.component';
import { EditComponent } from './feature1b/edit/edit.component'


const routes=[{
  path:'1a',
  component: Feature1aComponent,
  children:[{
    path:'',
    pathMatch: 'full',
    redirectTo:'tab1',
  },{
    path:'tab1',
    component: Tab1Component
  },{
    path:'tab2',
    component: Tab2Component
  },{
    path:'tab3',
    component: Tab3Component
  }]
},{
  path:'1b',
  redirectTo:'1b/overview'
},{
  path:'1b/overview',
  component: Feature1bComponent,
},{
  path:'1b/view',
  component: ViewComponent,
},{
  path:'1b/edit',
  component: EditComponent,
}]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MatTabsModule, MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Feature1aComponent, Feature1bComponent, Tab1Component,
    Tab2Component, Tab3Component, ViewComponent, EditComponent
  ]
})
export class Feature1Module { }
