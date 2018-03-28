/** Import of requrie in order to load package.json parameters */
declare const require: any;
/**
 * DEMO environement CenterOne
 */
export const environment = {
	"version": require('../../package.json').version,
	"production": true,
	"apiEndpoint": "https://iis.centerone.nl/ProcessProAPI",
	"useHash": false,
	"auth": {
		"method": "adfs",
		"adfs": {
			issuer: "https://identityserver.centerone.nl/core",
			clientId: "processproapp-iis-centerone-nl",
			//in case redirectUri is not index.html
			//adjust the route in oauth.module
			redirectUri: window.location.origin + "/ProcessProApp/index.html",
			//in case silent refresh need to be changed
			//ensure you also rename html file which
			//contains javascript that extracts the tokens
			silentRefreshRedirectUri: window.location.origin + "/ProcessProApp/silent_renew.html",
			//define personal information we require from adfs server
			//the info is accessed using user.profile property
			scope: "openid profile email read write idmgr",
			//only if supported by server
			//sessionChecksEnabled: true,
			//only in development enviroment set to true
			showDebugInformation: true
		}
	}
};
