
# oAuth2 & OpenID single sign on using ADFS

This module implements single signon using ADFS server to your app using oauth2 and opendId. It depends on [angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc) library.

## Steps to implement.

1. Copy `oauth` folder into your project
2. Copy `silent_renew.html` file from oauth folder into the `src` folder (where index.html resides)
3. Add `silent_renew.html` file as asset into `.angular-cli.json`. Note! angular-oauth2 library expets this file to be in the root directory of the project, next to index.html file.

```json
  ...
 "assets": [
    "assets",
    "favicon.ico",
    "silent_renew.html"
  ],
  ...
```

4. Import `angular-oauth2-oidc` library into your project
```node
npm i angular-oauth2-oidc --save
```

5. Create ADFS server configuration object and store it in the angular envronments file. Configuration object should have following props. This information is used by user.service to initialize connection with ADFS server (see line )

``` javascript

export const environment = {
  ....
  adfs:{
    issuer: 'https://identityserver.centerone.nl/core',
    clientId: 'process-pro',
    //in case redirectUri is not index.html
    //adjust the route in oauth.module
    redirectUri: window.location.origin + '/index.html',
    //in case silent refresh need to be changed
    //ensure you also rename html file which
    //contains javascript that extracts the tokens
    silentRefreshRedirectUri: window.location.origin + '/silent_renew.html',
    //define personal information we require from adfs server
    //the info is accessed using user.profile property
    scope: 'openid profile email read write',
    //only if supported by server
    //sessionChecksEnabled: true,
    //only in development enviroment set to true
    showDebugInformation: true
  }
  ....
}

```

6. Import `OauthModule` and `UserServuce` into your app.module.ts

```javascript
import { OauthModule } from './oauth/oauth.module';
import { UserService } from './oauth/user.service';

@NgModule({
  imports: [
    ....,
    OauthModule,
    ....
  ],
  providers:[
    ....,
    UserService,
    ....
  ]
```

8. Inject `UserService` into the root component of your application. After injecting UserService, the service will automatically start single sign on authorization process when app is loaded.

```javascript
import { UserService } from './oauth/user.service';

...

export class AppRoot implements OnInit{
  constructor(
    private oauth: UserService
  ){
    //console.debug("AppRoot started");
  }
}

```

9. Implement access token into the header of your http calls. To retreive access token inject UserService and access_token property of user object

```javascript
  console.debug( this.oauth.user.access_token )
```

10. To retreive user info /profile use profile property. The content of profile object depends on the settings you defined in `scope` of definition object and if those are supported by ADFS server. In addition,during authorisation the user can deselect (not alow you access) to some properties of his/her profile.
```javascript
  console.debug( this.oauth.user.profile )
```
