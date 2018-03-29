import { Injectable } from '@angular/core';
import {
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivate, CanDeactivate,
	CanActivateChild
} from '@angular/router';

import { Component } from '@angular/core';
import { UserService } from './user.service';

/** The user service for oAuth */
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private user: UserService,
		private router: Router
	) {
		console.log("AuthGuard..started");
	}
	/**
	 *
	 * @param next
	 * @param state
	 */
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		// debugger;
		console.group("canActivate");
		console.log("next...", next);
		console.log("state...", state);
		console.groupEnd();
		return new Promise((res, rej) => {
			// setTimeout(e => {
			this.user.loggedIn$.subscribe(loggedInState => {
				// debugger;
				if (loggedInState == true) {
					res(true);
				} else if (loggedInState == false) {
					console.log("Waiting for valid response from the auth server");
					this.user.onInit();
				} else if (typeof loggedInState == 'string') {
					rej(loggedInState);
				}
			});
			// }, 5000);
		});
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
