//Angular
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ExtraOptions } from '@angular/router';
import { Headers } from '@angular/http';
//3rd Party
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/Observable';

// Custom
import { environment as env } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//import { UserModel } from '../models/user.model';
//import { environment } from '../../../environments/environment.snbv-a';

/** The user service for oAuth */
@Injectable()
export class UserService implements CanActivate {
	/**
	 * User object holding tokens and profile info use access_token property
	 * add Bearer token into your api calls to backend server of your app
	 * Note! access_token information is automatically refreshed after token expire.
	 */
	user={
		id_token:"",
		access_token:"",
		refresh_token:"",
		profile:{},
		claims:{}
	}

	/**
	 * The constructor
	 * @param oauth2 reference to the oAuth service
	 * @param router The Angular router
	 */
	constructor(
		private oauth2: OAuthService,
		private router: Router
	) {
		// this.onInit();
	}
	/**
	 * Initialize oauth2 service
	 */
	onInit() {
		//debugger
		if (env.auth["adfs"]) {
			this.configureOauth(env.auth["adfs"]);
			this.listenForOauthEvents();

			if (env.auth["discoveryDocumentUrl"]) {
				// console.debug("discoveryDocumentUrl: " + env.auth["discoveryDocumentUrl"]);
				this.oauth2.loadDiscoveryDocument(env.auth["discoveryDocumentUrl"]).then(() => {
					this.oauth2.tryLogin().then(() => {
						this.handleLoginAttempt();
					});
				});
			} else {
				this.oauth2.loadDiscoveryDocumentAndTryLogin().then(() => {
					this.handleLoginAttempt();
				});
			}
		} else {
			console.error("User.Service: no ADFS definitions present in environment file!");
			console.error("User.Service: check Angular environment file for [auth.adfs] definitions!");
			this.setLoggedIn('No ADFS definitions present');
		}
	}

	/** Getter for the user profile */
	getUserProfile() {
		return this.profile;
	}

	/**
	 * Configure oauth service
	 * @param authConfig {AuthConfig} (angular-oauth2-oidc)
	 */
	configureOauth(authConfig) {
		//load identity server configuration
		this.oauth2.configure(authConfig);
		//initialize token validation handler (?)
		this.oauth2.tokenValidationHandler = new JwksValidationHandler();
	}

	/** listen for oauth2 service events */
	listenForOauthEvents() {
		// Subscribe to events from oauth2 service
		// see reducer function and look here too https://manfredsteyer.github.io/angular-oauth2-oidc/angular-oauth2-oidc/docs/classes/OAuthEvent.html#source
		this.oauth2.events.subscribe((e) => {
			this.reducer(e);
		});
	}

	/**
	 * This functions listens to events
	 * published by oauth2 service and
	 * in some cases reacts
	 * @param action
	 */
	reducer(action) {
		switch (action.type.toLowerCase()) {
			case "received_first_token":
				break;
			case "token_received":
				break;
			//all kind of errors
			case "token_refresh_error":
			case "token_validation_error":
			case "jwks_load_error":
			case "discovery_document_load_error":
			case "discovery_document_validation_error":
			case "session_error":
				this.removeUser();
				this.router.navigate(['error', '403']);
				break;
			case "token_expires":
				//perform silent refresh
				//no need it does autmatically
				this.silentRefresh();
				break;
			case "silent_refresh_error":
				//silent token refresh failed
				this.router.navigate(['error', '500']);
				break;
			case "user_profile_loaded":
				//now we can redirect to home
				// this.router.navigate(['home']);
				// this.loggedIn = true;
				// this.logger.next(this.loggedIn);
				break;
			case "logout":
				//remove locally stored token
				this.removeUser();
		}
	}

	/** This function is called after async login attempt is return from oauth service */
	handleLoginAttempt() {
		//debugger
		//callback from oauth login attempt
		if (!this.oauth2.hasValidIdToken() || !this.oauth2.hasValidAccessToken()) {
			//if there is an error
			if (window.location.href.indexOf("error") > -1) {
				//just do nothing or logout user?
				//this.logout();
			} else {
				// NOTE! When using hash routes should be disabled to retreive hash value use pure JS window.location.hash
				// -> this.oauth2.initImplicitFlow(window.location.hash);
				// When using location strategy(default ) we can retreive url from router and pass it to oauth2 service.
				// This value is then kept and we can retreive it using state property(see line 184)
				// -> this.oauth2.initImplicitFlow(this.router.url);
				let url = this.router.url.split('?')[0];
				if (env.production == false) { console.debug("url: " + url); }
				this.oauth2.initImplicitFlow(url);
			}
		} else {
			// We received tokens let save these localy in the service
			this.setTokens();
			this.setProfile();
			// Claims seem to be equal to profile content in the demo this.getClaims();
			// get url we send to oauth at start
			let url = this.oauth2.state;
			if (url) {
				this.router.navigate([url]);
			}
		}
	}

	/** This function is called from initLogin() after its confirmed that tokens are present */
	private setTokens() {
		this.user.id_token = this.oauth2.getIdToken();
		this.user.access_token = this.oauth2.getAccessToken();
		this.user.refresh_token = this.oauth2.getRefreshToken();
	}

	/** The container for the profile */
	public profile;

	/** This function is called from initLogin() after its confirmed that tokens are present */
	private setProfile() {
		// this.oauth2.loadUserProfile()
		// 	.then((d) => {
		// 		this.user.profile = d;
		// 		this.profile = d;
		// 		//publish logged in
		// 		//after profile is saved
		this.setLoggedIn(<boolean>true);
		// 	});
	}

	/** LoggedIn notification state */
	private LoggedIn: boolean | string = false;
	/** loggedIn notification subject */
	private loggedIn = new BehaviorSubject<boolean | string>(<boolean | string>this.LoggedIn);
	/** loggedIn notification observable */
	public loggedIn$ = this.loggedIn.asObservable();

	/**
	 * Use this function to change loggedIn flag and publish the change as subject
	 * @param state {boolean | string} The new loggedin state
	 */
	setLoggedIn(state: boolean | string) {
		this.LoggedIn = state;
		this.loggedIn.next(state);
	}

	/**
	 * This function extract claims during the test the values received where equal to loadUserProfile()
	 * I am not sure what is the difference between the functions, Dusan 2017-12-18
	 */
	getClaims() {
		this.user.claims = this.oauth2.getIdentityClaims();
	}

	/** Creates new header with authorization token */
	getUserTokenHttpHeader(): Headers {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json; charset=UTF-8');
		headers.append("Authorization", "Bearer " + this.user.access_token);
		return headers;
	}

	/** Refreshing a Token when using Implicit Flow */
	silentRefresh() {
		this.oauth2.silentRefresh().then((event) => {
			//check for # in URL
			if (location.href.indexOf("#") > -1) {
				//remove # after silent refresh - fix for IE and EDGE
				history.replaceState("", "", location.href.replace("#", ""))
			}
			//refresh tokens in user object
			this.setTokens();
		}).catch((e) => {
			console.error("silent refresh failed...", e);
		});
	}

	/** Logout user */
	logout() {
		this.oauth2.logOut();
	}

	/** This function is called on logout event */
	removeUser() {
		this.user = { id_token: null, access_token: null, refresh_token: null, profile: null, claims: null };
	}
	/**
	 * Angular route guard function used to protect specific routes
	 * @param next
	 * @param state
	 */
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

		return true;

		/*
		if (this.user.access_token == null) {
			this.reject(state.url);
		} else if (this.user.access_token) {
			let p = next.data['permission'], s = state.url;

			//check permission
			if (this.hasPermission(p) === true) {
				return true;
			} else {
				this.reject(s);
			}
		} else {
			this.redirect('/login');
		}*/
	}

	/**
	 * Check user permission for specific task used by route guard or by components for more granular permissions
	 * @param p
	 */
	hasPermission(p: string) {
		let u = this.user.profile;
		// Check if user has access to this path/url
		if (u && u['grantedPermissions']) {
			return u['grantedPermissions'][p] == "true";
		} else {
			return false;
		}
	}

	/** Reject the request */
	reject(url) {
		console.warn("Access denied to", url);
		this.router.navigate(['error', '401']);
		return false;
	}

	/**
	 * After a user successfully authorizes an application, the authorization server will redirect the user back to the application with either an authorization code or access token in the URL
	 * @param url Callback entry point of the app
	 */
	redirect(url) {
		this.router.navigateByUrl(url);
		return false;
	}
}
