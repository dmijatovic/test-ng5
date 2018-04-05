/**
 * OIDC client service using oidc-client lib,
 * This services is setup folowing this document
 * https://www.scottbrady91.com/Angular/SPA-Authentiction-using-OpenID-Connect-Angular-CLI-and-oidc-client
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserManager, UserManagerSettings,
  User, WebStorageStateStore } from 'oidc-client';

import { environment as env } from '../../environments/environment';

@Injectable()
export class OidcClientService {
  //where to sore user info
  userStore:WebStorageStateStore;
  manager:UserManager;
  user:User;
  init:boolean=false;
  constructor(
    private router:Router
  ){
    this.onInit();
    console.log('oidc.client.svc...started');
  }
  onInit(){
    this.initUserStore();
    this.initManager();
  }
  initUserStore(){
    this.userStore = new WebStorageStateStore({
      store: window.localStorage
    })
  }
  initManager(){
    let settings = this.getClientSettings();
    this.manager = new UserManager(settings);
    //listen for events
    this.listenForOidcEvents(settings);
    //set init flag
    this.init=true;
  }
  getUser(){
    return this.manager.getUser();
  }
  listenForOidcEvents(config){
    if (config.automaticSilentRenew){
      this.listenForSilentRenew();
    }
    //listen for user loaded event
    this.listenForUserLoaded();
  }
  /**
   * Oidc event listener for silentRenew error
   */
  listenForSilentRenew(){
    this.manager.events.addSilentRenewError((e)=>{
      console.warn("SilentRenewError...", e);
    });
  }
  /**
   * Oidc event listener when user is added to lib
   * we used it at the start of authentication or
   * during silent renew to update local user object
   */
  listenForUserLoaded(){
    this.manager.events.addUserLoaded((d)=>{
      this.user = d;
      if (this.user.expired===false){
        console.log("addUserLoaded...OK");
      }else{
        console.log("addUserLoaded...token expired!");
      }
    });
  }
  /**
   * OpenID Connect Providers
   */
  getClientSettings():UserManagerSettings{
    let adfs = env.auth.adfs;
    return {
      authority: adfs.issuer,
      client_id: adfs.clientId,
      redirect_uri: adfs.redirectUri,
      scope: adfs.scope,
      automaticSilentRenew: true,
      silent_redirect_uri: adfs.silentRefreshRedirectUri,
      response_type:"id_token token",
      post_logout_redirect_uri: null ,
      filterProtocolClaims: true,
      loadUserInfo: true
    };
  }
  /**
   * isLoggedIn assumes true when user object present and token expred flag
   * is set to false. It can be used by canActivate to quickly validate presence
   * of user object and access_token
   */
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }
  /**
   * Return access token in the required format so it can added to httpHeader
   */
  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }
  /**
   * Start authentication process by redirecting user to
   * ADFS server sign in page
   */
  startAuthentication(entryUrl:string="") {
    //debugger
    if (entryUrl){
      this.setEntryUrl(entryUrl);
    }
    if (this.manager){
      //start sign in redirect
      return this.manager.signinRedirect();
    }else{
      //initialize adfs manager
      this.initManager();
      //start signin redirect process
      return this.manager.signinRedirect();
    }
  }
  setEntryUrl(entryUrl:string){
    if (localStorage){
      let key = env.auth.adfs.clientId + ".entryUrl";
      localStorage.setItem(
        key,
        entryUrl
      );
      console.log("setEntryUrl...", entryUrl);
    }else{
      alert("Local storage");
      console.warn("localStorage...not available!");
    }
  }
  getEntryUrl(){
    let entryUrl="/";
    if (localStorage){
      let key = env.auth.adfs.clientId + ".entryUrl";
      let url = localStorage.getItem(key);
      if (url){
        entryUrl = url;
      }
    }
    console.log("getEntryUrl...", entryUrl);
    return entryUrl;
  }
  /**
   * This function is called after user succefuly signed to ADFS
   * ADFS server will then redirect user to specific app route (see getClientSettings)
   * The component at that route will call this function to complete sign in to app
   */
  completeAuthentication() {
    this.manager.signinRedirectCallback()
    .then(user => {
      //debugger
      let url = this.getEntryUrl();
      alert("CompleteAuthentication..." + url);
      //for now just go home
      if (url){
        console.log("completeAuthentication...navigate...", url);
        this.router.navigate([url]);
      }
    })
    .catch((e)=>{
      console.error("Authentication failed...", e);
      this.router.navigate['error/401'];
    });
  }
}
