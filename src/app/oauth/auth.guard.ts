import { Injectable } from '@angular/core';
import { Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivate, CanDeactivate,
  CanActivateChild } from '@angular/router';

import { Component } from '@angular/core';  
import { UserService } from './user.service';

/** The user service for oAuth */
@Injectable()
export class AuthGuard implements CanActivate{
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
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    console.group("canActivate");
    console.log("next...", next);
    console.log("state...", state);
    console.groupEnd();
		return true;
  }
}

/** The user service for canDeactivate homepage */
import { HomeComponent } from '../home/home.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanDeactivateHome implements CanDeactivate<HomeComponent>{
  constructor(){}
  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):Observable<boolean>|Promise<boolean>|boolean {
    debugger 
    return component.canDeactivate();
  }
}
