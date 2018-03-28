//Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//OAuth dependencies
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';

//App user service
import { UserService } from './user.service';
//Why is this here? It should work without home component.
//import { HomeComponent } from '../../layout/home/home.component';

//'dummy' component to capture redirect from
//ADFS server (just for debuggin purposes)
//import { OauthComponent } from './oauth.component';
/*
const routes: Routes = [{
	// Request from ADFS server is forwarded to this path
	path: 'index.html',
	component: OauthComponent,
	pathMatch: 'full'
}]*/

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		OAuthModule.forRoot(),
		//RouterModule.forChild(routes)
	],
	providers: [OAuthService, UserService],
})
export class OauthModule { }
