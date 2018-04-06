//Angular
import { Injectable } from '@angular/core';
import { Router,
  //ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ExtraOptions
} from '@angular/router';
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
export class UserService {
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
		//this.onInit();
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
        //discovery document is specified in env file
        //because it cannot be automatically loaded
				this.manualDiscoveryAndLogin();
			} else {
        //automatically download discovery document
        //AND proceed to login process
        this.autoDiscoveryAndLogin();
			}
		} else {
			console.error("User.Service: no ADFS definitions present in environment file!");
			console.error("User.Service: check Angular environment file for [auth.adfs] definitions!");
			this.setLoggedIn('No ADFS definitions present');
		}
  }
	/*
    DEPRECATED, use loadUserProfile
    Dusan, 2018-03-30
    Getter for the user profile
	getUserProfile() {
		return this.profile;
	}*/
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
  /**
   * Discovery document cannot be automatically loaded from ADFS
   * therefore we provide url where discovery document can be found
   * usually this is not same domain/url of ADFS server
   */
  manualDiscoveryAndLogin(){
    // console.debug("discoveryDocumentUrl: " + env.auth["discoveryDocumentUrl"]);
    this.oauth2.loadDiscoveryDocument(env.auth["discoveryDocumentUrl"])
    .then((d) => {
      if (d){
        console.log("manualDiscoveryDocument...OK");
        return this.oauth2.tryLogin();
      }else{
        debugger
        throw "manualDiscoveryDocument...FAILED";
      }
    })
    .then(()=>{
      //debugger
      console.log("manualTryLogin...OK");
      this.handleAccessAttempt();
    })
    .catch((e)=>{
      console.error("manualDiscoveryAndLogin...FAILED...", e);
      this.setLoggedIn("ADFS authentication failed");
    });
  }
  /**
   * Automatically load discovery document from ADFS server
   * and immeditally proceed to login process
   */
  autoDiscoveryAndLogin(){
    this.oauth2.loadDiscoveryDocumentAndTryLogin()
    .then(() => {
      console.error("loadDiscoveryDocumentAndTryLogin...OK");
      this.handleAccessAttempt();
    })
    .catch((e)=>{
      console.error("autoDiscoveryAndLogin...FAILED...", e);
      this.setLoggedIn("ADFS authentication failed");
    });
  }
	/**
   * This function is called by onInit and will be used twice:
   * 1. At initialization to start implicit flow
   * 2. After succefull authentication on ADFS server user is returned to
   * application and onInit will call this function second time   *
  */
	handleAccessAttempt() {
		//debugger
		//callback from oauth login attempt
		if (!this.oauth2.hasValidIdToken() || !this.oauth2.hasValidAccessToken()) {
			//if there is an error
			if (window.location.href.indexOf("/error/") > -1) {
        //just do nothing if we send user to error route/pages
        console.log(`
          handleLoginAttempt...
          alowed access to error route(s) without authentication
        `);
			} else {
        //start ADFS implicit authentication
        this.initImplicitFlow();
			}
		} else {
      //user has valid token
      this.handleAuthenticatedUser();
		}
  }
  /**
   * Starts authentication process using oauth angular lib
   * When using router location strategy(default) we can retreive url from router and pass
   * it to oauth2 service. This value is retreived using state
   * property(see line 184) -> this.oauth2.initImplicitFlow(this.router.url);
   */
  private initImplicitFlow(){
    /*
    Note! we use pure JS to extract route for 'deep linking' because router is
    disabled (not to react to ADFS redirects). In addition if the route guards (canActivate)
    are present we are not able to extract complete url before user is authenticated
    */
    let url = window.location.pathname;
    //debugger
    console.log("initImplicitFlow...start ADFS authentication");
    //start redirect
    this.oauth2.initImplicitFlow(url);
  }
  /**
   * This function is applied from
   */
  private handleAuthenticatedUser(){
    //debugger
    //console.log("user.service.handleAuthenticatedUser...start");
    //We received tokens let save these localy
    this.setTokens();
    //check if passed an url for deep linking
    //ONLY if not silent refresh
    this.setInitRoute();
  }
	/**
   * Set tokens into user object for later use
   * This function is called from handleAuthenticatedUser()
   * after its confirmed that tokens are present
   */
	private setTokens() {
    try{
      this.user.id_token = this.oauth2.getIdToken();
      this.user.access_token = this.oauth2.getAccessToken();
      this.user.refresh_token = this.oauth2.getRefreshToken();
      console.log("setTokens...OK");
      // after tokes are loaded
      // we set loggedIn flag to true
      this.setLoggedIn(true);
    }catch(e){
      //in case of any error
      //we set loggedIn to false
      console.warn("setTokens...FAILED");
      this.setLoggedIn(false);
    }
  }
  /**
   * Determine initial route. We use deep link url from oauth library
   * which was passed at begining of ADFS authentication process (see initImplicitFlow)
   * NOTE! in any case we navigate using angular router in order to
   * 'activate' router becouse angular router is disabled at init (initalNavigation = false)
   * check routerConfig in app.module for the router setting
   */
  setInitRoute(){
    //default
    let url = "/";
    if (this.oauth2.state){
      //get url from oauth state
      url = this.oauth2.state;
    }else{
      //we use window location here because
      //angular router might not be active
      //we set initalNavigation = false to
      //avoid interference with ADFS redirects
      url = window.location.pathname;
    }
    console.log("setInitRoute...", url);
    this.router.navigate([url]);
  }
  /*
    DEPRECATED, use loadUserProfile
    Dusan, 2018-03-30
	/** The container for the profile
	public profile;
  */
	/** Call this function after its confirmed that tokens are present
   * loggedIn==true
	private setProfile() {
		this.oauth2.loadUserProfile()
    .then((d) => {
      this.user.profile = d;
      this.profile = d;
      //publish logged in
      //after profile is saved
    });
  } */
  /**
   * Load adfs profile information
   * (if avaliable/provided by adfs)
   */
  loadUserProfile(){
    return this.oauth2.loadUserProfile;
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
    //log events from oauth
    console.log("user.service.oauth2.event...", action.type);
    //decide on action
		switch (action.type.toLowerCase()) {
			case "received_first_token":
				break;
			case "token_received":
				break;
      //all kind of errors
      case "invalid_nonce_in_state":
			case "token_refresh_error":
			case "token_validation_error":
			case "jwks_load_error":
			case "discovery_document_load_error":
			case "discovery_document_validation_error":
			case "session_error":
				//this.removeUser();
        //this.router.navigate(['error', '403']);
        this.logout();
				break;
			case "token_expires":
				//perform silent refresh
				//no need it does automatically
        this.silentRefresh();
				break;
			case "silent_refresh_error":
        //silent token refresh failed
        this.logout();
				//this.router.navigate(['error', '500']);
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
    console.log("setLoggedIn...", state);
		this.LoggedIn = state;
		this.loggedIn.next(state);
	}

	/**
	 * This function extract claims during the test the values received where equal to loadUserProfile()
	 * I am not sure what is the difference between the functions, Dusan 2017-12-18
	 */
	getIdentityClaims() {
		return this.oauth2.getIdentityClaims();
	}

	/** Creates new header with authorization token */
	getUserTokenHttpHeader(): Headers {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json; charset=UTF-8');
		headers.append("Authorization", "Bearer " + this.user.access_token);
		return headers;
	}

  /**
   * Append authorization token to header
   * and reuturn new header (note! header is immutable)
   */
	addAccessTokenToHttpHeader(headers): Headers {
		let h = headers.append("Authorization", "Bearer " + this.user.access_token);
		return h;
	}

	/** Refreshing a Token when using Implicit Flow
   * NOTE! this function requires silent_renew.html file
   * placed in the 'root'of the project next to index.html
  */
	silentRefresh() {
    console.log("silentRefresh...started");
		this.oauth2.silentRefresh().then((event) => {
      //debugger
      console.log("silentRefresh...OK");
			//check for # in URL
			if (location.href.indexOf("#") > -1) {
        //debugger
        console.log("silentRefresh...remove #");
				//remove # after silent refresh - fix for IE and EDGE
        history.replaceState("", "", location.href.replace("#",""));
			}
			//refresh tokens in user object
			this.setTokens();
		}).catch((e) => {
      debugger
      console.error("silentRefresh...FAILED...", e);
      this.logout();
		});
	}

	/** Logout user */
	logout() {
		this.oauth2.logOut();
	}

	/** This function is called on logout event */
	removeUser() {
		this.user = {
      id_token: null,
      access_token: null,
      refresh_token: null,
      profile: null, claims: null
    };
	}
}
