// /**
//  * THESE SETTINGS SHOULD BE PLACED IN ENVIROMENTS FILE!
//  * there are here just as an example
//  */

// import { AuthConfig } from 'angular-oauth2-oidc';

// export const googleConfig: AuthConfig = {
// 	// Url of the Identity Provider
// 	issuer: 'https://accounts.google.com',
// 	// URL of the SPA to redirect the user to after login
// 	redirectUri: 'http://localhost:4200/autologin',
// 	// The SPA's id. The SPA is registerd with this id at the auth-server
// 	clientId: '788054368467-g04nm4ls3g6csmjjv1u9f40co993ohf2.apps.googleusercontent.com',
// 	responseType: 'id_token token',
// 	// set the scope for the permissions the client should request
// 	// The first three are defined by OIDC. The 4th is a usecase-specific one
// 	scope: 'openid profile email',
// 	postLogoutRedirectUri: "https://localhost:4200/#403",
// 	//these are not possible for google
// 	sessionChecksEnabled: false,
// 	showDebugInformation: true,
// 	strictDiscoveryDocumentValidation: false,
// 	logoutUrl: "http://localhost:4200/500",
// 	clearHashAfterLogin: true
// }

// /**
//  * THIS SHOULD GO INTO ENVIROMENTS!
//  */
// export const steyerConfig: AuthConfig = {
// 	// Url of the Identity Provider
// 	issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
// 	// URL of the SPA to redirect the user to after login
// 	redirectUri: window.location.origin + '/index.html',
// 	//silent refresh
// 	silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
// 	// The SPA's id. The SPA is registerd with this id at the auth-server
// 	clientId: 'spa-demo',
// 	// set the scope for the permissions the client should request
// 	// The first three are defined by OIDC. The 4th is a usecase-specific one
// 	scope: 'openid profile email voucher',
// 	sessionChecksEnabled: true,
// 	showDebugInformation: true
// }

// /**
//  * THIS SHOULD GO INTO ENVIROMENTS!
//  */
// export const schipholGroupDev: AuthConfig = {
// 	issuer: 'https://logon-a.schiphol.nl/adfs/',
// 	clientId: 'kermit',
// 	redirectUri: window.location.origin + '/home',
// 	scope: 'openid profile',
// 	//loginUrl: "https://identityserver.centerone.nl/core/connect/authorize",
// 	//logoutUrl: "https://identityserver.centerone.nl/core/connect/endsession"
// 	//loginUrl:''
// 	showDebugInformation: true
// }

// /**
//  * THIS SHOULD GO INTO ENVIROMENTS!
//  */
// export const centerOne: AuthConfig = {
// 	issuer: 'https://identityserver.centerone.nl/core',
// 	clientId: 'process-pro',
// 	//these two props need to be aligned with ADFS server values
// 	redirectUri: window.location.origin + '/index.html',
// 	silentRefreshRedirectUri: window.location.origin + '/silent_renew.html',
// 	//here we define what information we want to receive in tokens
// 	//this info can be also accessed using getProfile commando
// 	scope: 'openid profile email read write',
// 	sessionChecksEnabled: true,
// 	showDebugInformation: true
// }


// /**
//  * Definitions extracted from ADFS server
//  * this is just example
//  */
// const centerOneDefs = {
// 	issuer: "https://identityserver.centerone.nl/core",
// 	jwks_uri: "https://identityserver.centerone.nl/core/.well-known/jwks",
// 	authorization_endpoint: "https://identityserver.centerone.nl/core/connect/authorize",
// 	token_endpoint: "https://identityserver.centerone.nl/core/connect/token",
// 	userinfo_endpoint: "https://identityserver.centerone.nl/core/connect/userinfo",
// 	end_session_endpoint: "https://identityserver.centerone.nl/core/connect/endsession",
// 	check_session_iframe: "https://identityserver.centerone.nl/core/connect/checksession",
// 	revocation_endpoint: "https://identityserver.centerone.nl/core/connect/revocation",
// 	introspection_endpoint: "https://identityserver.centerone.nl/core/connect/introspect",
// 	frontchannel_logout_supported: true,
// 	frontchannel_logout_session_supported: true,
// 	scopes_supported: ["openid", "profile", "email", "address", "roles", "all_claims", "offline_access", "read", "write"],
// 	claims_supported: ["sub", "name", "family_name", "given_name", "middle_name", "nickname", "preferred_username", "profile", "picture", "website", "gender", "birthdate", "zoneinfo", "locale", "updated_at", "email", "email_verified", "address", "role"],
// 	response_types_supported: ["code", "token", "id_token", "id_token token", "code id_token", "code token", "code id_token token"],
// 	response_modes_supported: ["form_post", "query", "fragment"],
// 	grant_types_supported: ["authorization_code", "client_credentials", "refresh_token", "implicit"],
// 	subject_types_supported: ["public"],
// 	id_token_signing_alg_values_supported: ["RS256"],
// 	code_challenge_methods_supported: ["plain", "S256"],
// 	token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"]
// }

// /**
//  * Definitions extracted from ADFS server
//  * this is just example
//  */
// export const schipholGroupNoDiscovery = {
// 	"clientId": "proces-pro",
// 	"issuer": "https://logon-a.schiphol.nl/adfs",
// 	"authorization_endpoint": "https://logon-a.schiphol.nl/adfs/oauth2/authorize/",
// 	"token_endpoint": "https://logon-a.schiphol.nl/adfs/oauth2/token/",
// 	"jwks_uri": "https://logon-a.schiphol.nl/adfs/discovery/keys",
// 	"token_endpoint_auth_methods_supported": [
// 		"client_secret_post",
// 		"client_secret_basic",
// 		"private_key_jwt",
// 		"windows_client_authentication"
// 	],
// 	"response_types_supported": [
// 		"code",
// 		"id_token",
// 		"code id_token",
// 		"id_token token",
// 		"code token",
// 		"code id_token token"
// 	],
// 	"response_modes_supported": [
// 		"query",
// 		"fragment",
// 		"form_post"
// 	],
// 	"grant_types_supported": [
// 		"authorization_code",
// 		"refresh_token",
// 		"client_credentials",
// 		"urn:ietf:params:oauth:grant-type:jwt-bearer",
// 		"implicit",
// 		"password",
// 		"srv_challenge"
// 	],
// 	"subject_types_supported": [
// 		"pairwise"
// 	],
// 	"scopes_supported": [
// 		"profile",
// 		"aza",
// 		"winhello_cert",
// 		"user_impersonation",
// 		"logon_cert",
// 		"email",
// 		"vpn_cert",
// 		"allatclaims",
// 		"openid"
// 	],
// 	"id_token_signing_alg_values_supported": [
// 		"RS256"
// 	],
// 	"token_endpoint_auth_signing_alg_values_supported": [
// 		"RS256"
// 	],
// 	"access_token_issuer": "http://logon-a.schiphol.nl/adfs/services/trust",
// 	"claims_supported": [
// 		"aud",
// 		"iss",
// 		"iat",
// 		"exp",
// 		"auth_time",
// 		"nonce",
// 		"at_hash",
// 		"c_hash",
// 		"sub",
// 		"upn",
// 		"unique_name",
// 		"pwd_url",
// 		"pwd_exp",
// 		"sid"
// 	],
// 	"microsoft_multi_refresh_token": true,
// 	"userinfo_endpoint": "https://logon-a.schiphol.nl/adfs/userinfo",
// 	"capabilities": [],
// 	"end_session_endpoint": "https://logon-a.schiphol.nl/adfs/oauth2/logout",
// 	"as_access_token_token_binding_supported": true,
// 	"as_refresh_token_token_binding_supported": true,
// 	"resource_access_token_token_binding_supported": true,
// 	"op_id_token_token_binding_supported": true,
// 	"rp_id_token_token_binding_supported": true,
// 	"frontchannel_logout_supported": true,
// 	"frontchannel_logout_session_supported": true
// }

// /**
//  * Definitions extracted from ADFS server
//  * this is just example
//  */
// export const steyerNoDiscovery = {
// 	"clientId": "spa-demo",
// 	"redirectUri": window.location.origin + '/index.html',
// 	"issuer": "https://steyer-identity-server.azurewebsites.net/identity",
// 	"jwks_uri": "https://steyer-identity-server.azurewebsites.net/identity/.well-known/jwks",
// 	"authorization_endpoint": "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize",
// 	"token_endpoint": "https://steyer-identity-server.azurewebsites.net/identity/connect/token",
// 	"userinfo_endpoint": "https://steyer-identity-server.azurewebsites.net/identity/connect/userinfo",
// 	"end_session_endpoint": "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession",
// 	"check_session_iframe": "https://steyer-identity-server.azurewebsites.net/identity/connect/checksession",
// 	"revocation_endpoint": "https://steyer-identity-server.azurewebsites.net/identity/connect/revocation",
// 	"scopes_supported": [
// 		"roles",
// 		"booking",
// 		"write",
// 		"company",
// 		"voucher",
// 		"openid",
// 		"profile",
// 		"email",
// 		"phone",
// 		"address",
// 		"offline_access"
// 	],
// 	"claims_supported": [
// 		"role",
// 		"projects",
// 		"buyInBulk",
// 		"sub",
// 		"name",
// 		"family_name",
// 		"given_name",
// 		"middle_name",
// 		"nickname",
// 		"preferred_username",
// 		"profile",
// 		"picture",
// 		"website",
// 		"gender",
// 		"birthdate",
// 		"zoneinfo",
// 		"locale",
// 		"updated_at",
// 		"email",
// 		"email_verified",
// 		"phone_number",
// 		"phone_number_verified",
// 		"address"
// 	],
// 	"response_types_supported": [
// 		"code",
// 		"token",
// 		"id_token",
// 		"id_token token",
// 		"code id_token",
// 		"code token",
// 		"code id_token token"
// 	],
// 	"response_modes_supported": [
// 		"form_post",
// 		"query",
// 		"fragment"
// 	],
// 	"grant_types_supported": [
// 		"authorization_code",
// 		"client_credentials",
// 		"password",
// 		"refresh_token",
// 		"implicit"
// 	],
// 	"subject_types_supported": [
// 		"public"
// 	],
// 	"id_token_signing_alg_values_supported": [
// 		"RS256"
// 	],
// 	"token_endpoint_auth_methods_supported": [
// 		"client_secret_post",
// 		"client_secret_basic"
// 	]
// }

// /**
//  * Definitions extracted from ADFS server
//  * this is just example of settings
//  */
// export const googleNoDiscovery: AuthConfig = {
// 	// URL of the SPA to redirect the user to after login
// 	'redirectUri': 'http://localhost:4200/autologin',
// 	// The SPA's id. The SPA is registerd with this id at the auth-server
// 	'clientId': '788054368467-g04nm4ls3g6csmjjv1u9f40co993ohf2.apps.googleusercontent.com',
// 	'postLogoutRedirectUri': '',
// 	'loginUrl': 'https://accounts.google.com/o/oauth2/v2/auth',
// 	'scope': 'openid profile email',
// 	'resource': '',
// 	'rngUrl': '',
// 	'oidc': true,
// 	'requestAccessToken': true,
// 	'options': null,
// 	'issuer': 'https://accounts.google.com',
// 	'clearHashAfterLogin': true,
// 	'tokenEndpoint': 'https://www.googleapis.com/oauth2/v4/token',
// 	'userinfoEndpoint': 'https://www.googleapis.com/oauth2/v3/userinfo',
// 	'responseType': 'token',
// 	'showDebugInformation': true,
// 	'silentRefreshRedirectUri': 'http://localhost:4200/silent-refresh.html',
// 	'silentRefreshMessagePrefix': '',
// 	'silentRefreshShowIFrame': false,
// 	'silentRefreshTimeout': 20000,
// 	'dummyClientSecret': null,
// 	'requireHttps': 'remoteOnly',
// 	'strictDiscoveryDocumentValidation': false,
// 	'jwks': {
// 		'keys': [
// 			{
// 				'kty': 'RSA',
// 				'alg': 'RS256',
// 				'use': 'sig',
// 				'kid': '7540561fdb04b89d824a1b7b9e8849873e7cb50e',
// 				'n':
// 					'sSFZrLIrXzvXBCehdPR10T-mfHWFU5ZtGzW9buI7wT_tJzZ1SRUc2l1NH92kGV9bmWRtDLjWcWFwMG7rbjX25-R-62lD1k15gQiO4bhx7gbV05e36os2vXTs0ypj9GS9y8X_2fYAnxxulMLwz4m24Ejo2tQI43-V-3Tec6cSXe0FjhRaPbGdS8GHPDKkhpJ1NHMZ38vhddIImOfvtVuz3lt_zwjBsAC6Q7PHs2GOm3KtC22DCwXMYSri4QOQcasuvTlZxIQSIksTyuH0T02IH5SJvQZSx46Vfq8BM4JP-zEEjzadoyxQPouRM6TrUeaqNv5B1f1lbH6G0G_r_ddYWQ',
// 				'e': 'AQAB'
// 			},
// 			{
// 				'kty': 'RSA',
// 				'alg': 'RS256',
// 				'use': 'sig',
// 				'kid': '778233e8f6f342ea09e867aad25f543adeebf372',
// 				'n':
// 					'8MMxQ9F7R1zJ57QvLX-HqUlTVLLofCzZ3-lxohJr8ivJDGZoCqll7ZTNO0nGMgnPpIO-3BQLkaNGQDCpnID1vNIjClFFl0E3cN5bDX15uxCQeQDsm25fTlphpy5FkdoHCviswtrsl2KKUPeRlKqCqMjlDO27KuxIwzIPdNSqv4tseZmI-biFt2JlO9htgODrVqaawdm27t9HcWfOK_a5czRFDHWck2-ZwjbCOF9CtF1ggYm11aV0TElExXr5fgjAQdZ1yGmJvir127BRUgyIy5cpyf7VRRf2Cv7whSMoVJr4W3OK0H9vkuFLnlBiBNYQmH_eWy5U4jBfZjBqvA7Oww',
// 				'e': 'AQAB'
// 			},
// 			{
// 				'kty': 'RSA',
// 				'alg': 'RS256',
// 				'use': 'sig',
// 				'kid': '8ec17994394464d95b0b3d906326f1cdde8aee64',
// 				'n':
// 					'w49KfvzGWVXH4vyUxvP29_QTmJfvLp4RPT1WlI6Wo2aNvn6j9vRSLDrK2CnOvvrrlUKvR-8FTcyNi9pRKXDwDhEJcyVFBJVi4PqDh0KIX_dOGYCulr5FUvU0HXQxlMWSHIsJjfGbMMUwM0p09y8KHL-kipiipzn80EpBmrI4Q3t6XOAZJSmbIPaGZJDjyoWWV0TDdVDBMfkqII6tOOB7Ha189AZjz7FHYXR9CIc0Jm6rFy0tVpdHFEG3ptcNQEDQ5ghyMM4PDM4ZmQ5uk3WgHVqnpdmGEfKekLwmYFWgnI-ux_MabltIxr9TE1qubEmebM64rOusHBF0mSbEwggbyw',
// 				'e': 'AQAB'
// 			}
// 		]
// 	},
// 	'customQueryParams': null,
// 	'silentRefreshIFrameName': 'angular-oauth-oidc-silent-refresh-iframe',
// 	'timeoutFactor': 0.75,
// 	'sessionCheckIntervall': 3000,
// 	'sessionCheckIFrameName': 'angular-oauth-oidc-check-session-iframe',
// 	'disableAtHashCheck': false,
// 	'skipSubjectCheck': false
// }
