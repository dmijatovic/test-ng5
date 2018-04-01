import { Component, OnInit } from '@angular/core';

import { OidcClientService } from './oidc.client.svc';
/**
 * authentication component to capture redirect from
 * ADFS server (just for debuggin purposes)
 */
@Component({
  selector: 'app-oauth-component',
  template: `
    <h1>Logging you in</h1>
  `
})
export class OauthComponent implements OnInit{
  constructor(
    private oidc: OidcClientService
  ){}
  ngOnInit(){
    //debugger
    this.oidc.completeAuthentication();
  }
}
