import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Feature1Module } from './feature1/feature1.module'
import { Feature2Module } from './feature2/feature2.module'
import { HelpModule } from './help/help.module';
import { UserModule } from './user/user.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

import { MainPageTemplate } from './layout/main/main.component';

import { OauthModule } from './oauth/oauth.module';
import { UserService } from './oauth/user.service';
import { AuthGuard, CanDeactivateHome, CanDeactivateOverview } from './oauth/auth.guard';

//routes
export const routes: Routes = [{
	path: '',
	pathMatch: 'full',
	redirectTo: 'home',
}, {
	path: 'home',
	component: MainPageTemplate,
	canActivate: [AuthGuard],
	children: [
		{
			path: '',
			component: HomeComponent,
			canDeactivate: [CanDeactivateHome]
		},
	]
}, {
	path: '**',
	redirectTo: 'home'
}]


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule, BrowserAnimationsModule,
		Feature1Module,
		Feature2Module,
		HelpModule,
		UserModule,
		LayoutModule,
		SharedModule,
		OauthModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		UserService,
		AuthGuard, CanDeactivateHome,CanDeactivateOverview,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
