//Angular dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//App user service
import { OidcClientService } from './oidc.client.svc';
import { OauthComponent } from './oauth.component';
import { environment as env } from '../../environments/environment';

const routes: Routes = [{
  //use path from adfs service defined in environment
	path: 'index.html',
	component: OauthComponent,
	pathMatch: 'full'
}]

@NgModule({
  declarations:[
    OauthComponent
  ],
	imports: [
		RouterModule.forChild(routes)
	],
	providers: [ OidcClientService ],
})
export class Oauth2Module { }
