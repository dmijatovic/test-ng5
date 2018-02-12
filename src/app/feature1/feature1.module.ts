import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1aComponent } from './feature1a/feature1a.component';
import { Feature1bComponent } from './feature1b/feature1b.component';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './feature1a/tab1/tab1.component';
import { Tab2Component } from './feature1a/tab2/tab2.component';
import { Tab3Component } from './feature1a/tab3/tab3.component';
import { ViewComponent } from './feature1b/view/view.component';
import { EditComponent } from './feature1b/edit/edit.component';
import { SharedModule } from '../shared/shared.module';

// Router
export const routes: Routes = [
	{
		path: "f1a",
		component: Feature1aComponent,
		children: [
			{
				path: "tab1",
				component: Tab1Component
			},
			{
				path: "tab2",
				component: Tab2Component
			},
			{
				path: "tab3",
				component: Tab3Component
			},
		],
	},
	{
		path: "f1b",
		component: Feature1bComponent
	},
	{
		path: "f1b",
		redirectTo: "f1b/overview",
	},
	{
		path: "f1b/overview",
		component: Feature1bComponent
	},
	{
		path: "f1b/view/:id",
		component: ViewComponent
	},
	{
		path: "f1b/edit/:id",
		component: EditComponent
	},
];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
	],
	declarations: [Feature1aComponent, Feature1bComponent, Tab1Component, Tab2Component, Tab3Component, ViewComponent, EditComponent]
})
export class Feature1Module { }
