/** Import of requrie in order to load package.json parameters */
declare const require: any;
/**
 * Schiphol TEST/DEMO environmet variables
 * NOTE! these are PRELIMINARY SETTINGS
 * these need to be validated
 * Dusan, 2018-01-7
 */
export const environment = {
	"version": require('../../package.json').version,
	"production": false,
	"apiEndpoint": "/ProcessProAPI",
	"useHash": false,
	"auth": {
		"method": "adfs",
		"discoveryDocumentUrl": "https://processpro-a.schiphol.nl/ProcessProAPI/.well-known/openid-configuration",
		"adfs": {
			issuer: "https://logon-a.schiphol.nl/adfs",
			clientId: "dfb3431d-2015-4d26-8296-1522f415a529",
			customQueryParams: { resource: "dfb3431d-2015-4d26-8296-1522f415a529" },
			//in case redirectUri is not index.html
			//adjust the route in oauth.module
			redirectUri: window.location.origin + "/ProcessProApp/index.html",
			//in case silent refresh need to be changed
			//ensure you also rename html file which
			//contains javascript that extracts the tokens
			silentRefreshRedirectUri: window.location.origin + "/ProcessProApp/silent_renew.html",
			//define personal information we require from adfs server
			//the info is accessed using user.profile property
			scope: "openid",
			//only if supported by server
			//sessionChecksEnabled: true,
			//only in development enviroment set to true
			showDebugInformation: true,
			strictDiscoveryDocumentValidation: false,
		}
	}
};
