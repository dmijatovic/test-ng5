import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageTemplate } from './layout/main/main.component';

//lazy loading feature 1 module
//import { Feature1Module } from './feature1/feature1.module'

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './error/error.module';

import { Feature2Module } from './feature2/feature2.module'
import { HelpModule } from './help/help.module';
import { UserModule } from './user/user.module';

//Authentication
import { Oauth2Module } from './oauth2/oauth2.module';
import { OidcClientService } from './oauth2/oidc.client.svc';
import {
  AuthGuard, CanDeactivateHome,
  CanDeactivateOverview
} from './oauth2/auth.guard';

//routes
export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
},{
  path: 'home',
  component: MainPageTemplate,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: HomeComponent,
    canDeactivate: [ CanDeactivateHome ]
  }]
},{
  path: "feature1",
  component: MainPageTemplate,
  loadChildren: './feature1/feature1.module#Feature1Module'
},{
  path: '**',
  redirectTo: 'error/404'
}]

const routerConfig={
  //enable loging of router event
  //enableTracing: true,
  //dissable initial navigation
  //in order to support ADFS redirect
  //to index.html#id_token....
  initialNavigation: true
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    ErrorModule,
    //Feature1Module,
    Feature2Module,
    HelpModule,
    UserModule,
    LayoutModule,
    SharedModule,
    Oauth2Module,
    RouterModule.forRoot(
      routes, routerConfig
    )
  ],
  providers: [
    OidcClientService, AuthGuard,
    CanDeactivateHome, CanDeactivateOverview
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
