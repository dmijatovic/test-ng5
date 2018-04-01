import { Injectable } from '@angular/core';
import {
  Router,
	ActivatedRouteSnapshot, RouterStateSnapshot,
	CanActivate, CanDeactivate, CanActivateChild
} from '@angular/router';

//RxJs
import 'rxjs/add/operator/takeWhile';

import { OidcClientService } from './oidc.client.svc';

/** The user service for oAuth */
@Injectable()
export class AuthGuard implements CanActivate {
  //subscription flag
  subscribe:boolean=true;
	constructor(
		private oidc: OidcClientService,
		private router: Router
	){
		console.log("auth.guard...started");
	}
	/**
	 *
	 * @param next
	 * @param state
	 */
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    /*
		console.group("auth.guard.canActivate");
		console.log("next...", next);
		console.log("state...", state);
    console.groupEnd();
    *///debugger
    if (this.oidc.user){
      //check if access token expired
      if (this.oidc.user.expired){
        console.warn("canActivate...user token expired...");
        return false;
      }else{
        console.log("canActivate...", state.url, "...true");
        return true;
      }
    }else{
      console.log("canActivate...", state.url, "...startAuthentication");
      //we do not have user so start authentication process
      this.oidc.startAuthentication(state.url);
      return false;
    }
  }
}

/** The user service for canDeactivate homepage */
import { HomeComponent } from '../home/home.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanDeactivateHome implements CanDeactivate<HomeComponent>{
	constructor() { }
	canDeactivate(
		component: HomeComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return component.canDeactivate();
	}
}

import { OverviewComponent } from '../user/overview/overview.component';

@Injectable()
export class CanDeactivateOverview implements CanDeactivate<OverviewComponent>{
	constructor() { }
	canDeactivate(
		component: OverviewComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {

		return component.canDeactivate(null);
	}
}
