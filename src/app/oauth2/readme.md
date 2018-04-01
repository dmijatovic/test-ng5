
# oAuth2 & OpenID single sign on using ADFS

This module implements single sign-on using ADFS server to your app using oauth2 and opendId. It depends on [oidc-client.js](https://www.npmjs.com/package/oidc-client) library.

## Steps to implement

1. Install oidc-client and dependency libs (follow steps in npm)
2. Include oauth module into your solution
3. Include auth.guard.ts into your router
4. For silent_renew include html and js files into assets
