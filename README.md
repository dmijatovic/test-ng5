# Test1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## SCSS
- change css in scss in angular-cli.json
- rename style.css naar main.scss
- add style to main.component
- examine head
- change start naar dev in package.json
  ng serve -ec -sm
- add simple style in main.component.scss
- add same reference to help.component.scss
- examine header of index.html
  - how many components are on page?
  - how many styles are added to header? 

- add user template to user page
- style:
  - body in main.scss
  - app.component
  - user page in overview.scss

- update routing for help and user (include template)
- add page-body class to help.start component
- style app-body in main.scss (or _layout.scss)

## Material
- install @angular/material theme (https://material.angular.io/guide/getting-started)
- copy material _theming.scss into styles folder for reference (maybe just use this)
- create _theme.scss in styles folder
- include angular material theming
- customize theme fonts
- customize theme colors (use variables.scss)
- create menu that uses config file to load routes in the header
- create form on user page using material controls:
- group 1: firstName, lastName
- group 2: email, password
- group 3: address:
- street, number, postcode, country
- group 4: origin
  - date of birth, place of birth


## Route guards
- npm i -s angular-oauth2-oidc
- connect oauth module
- insert user.service into a router
- implement folowing guards
  - canActivate
  - canDeactivate
  - canLoad (?)
  - canActivatChild(?)


### OauthModule
Uses angular-oauth2-oidc for ADFS authentication.

#### UserService (user.service.ts)
Authentication proces is stated by user.service.onInit() function. Process is as follows:

- <b>loadDiscoveryDocument</b>: it can be automatically downloaded based on ADFS info defined in environment.ts. OR it can be manually downloaded (Schiphol case). Discovery document contains ADFS server specific definitions required to handle a login attempt. In combination with the settings provided in environment file this is complete information that needed for app to be able to handle login attempt according to OIDC and implicitFlow 'protocol'

- <b>handleLoginAttempt</b>: after discovery document is loaded the login process is started according to implicitFlow. This function starts with the check if user already has valid token and is split in two parts. 
  - No valid token: The authentication process is just stared. The user is redirected to ADFS login page. In case of 'deep' linking 'desired' url is passed to ADFS server usign function oauth2.initImplicitFlow(url).
  - hasValidToken: if user has valid token it means that user completed login via ADFS server and is redirected back to out app. In that case we can procees with app internal process, like saving token and profile information received from ADFS server. And we can redirect user to proper page in case of deep linking.

- loggedIn$ observable subject and setLoggedIn: 

- silentRefresh: there is support for silentrefresh using iframe in file silent_renew.html. This file needs to be places in root of the app.


## Directives

1. Create alert directive as part of shared module. Alert directive has 2 inputs: colDef and cellValue. Implement alert directive on feature 1b page table. Use feature 1b service and column definitions provided in the service. If the value is below treshold the cell should have "custom-alert-class". All info is avaliable in the service file.

2. Create hover directive as part of shared module. On mouse enter element should get class "custom-hover-class". On mouse leave the class should be removed.

### Pipes

- Create pipe ib the shared module using ng cli.

```JavaSctipt
ng g p shared/formatColVal

```

- Add pipe to shared module exports.
- Use pipe in feature1b table (feature1b component)
- Test pipe by consol-logging value and args
- Pass col as argument to formatColVal pipe
- Write pipe function to format value based on col type information
  - include date pipe from angular
  - include formatNumber function from util in 'app.config.ts' file
  - create switch function based on col.type and apply string, date, float, integer and currency formatting. See feature1bservice for props available in column.
  - implement 'n/a' for null values independent of col.type
  - in all 'edge' cases just return received value back

## Testing Angular application

Angular project created using angular-cli provides 2 testing models: unit test and e2e test. Both models use [Jasmine](https://jasmine.github.io/pages/docs_home.html) testing framework (default setup when using angular-cli). Each model has it's own test runner:

- [Karma](https://karma-runner.github.io/2.0/config/configuration-file.html) is **unit test** runner. Definitions are stored in karma.conf.js and test.ts file. The unit tests are, by default created by angular cli in *spec.ts file. The test file is created in the same folder as component/directive/pipe etc.
- [Protractor](http://www.protractortest.org/#/) is **e2e test** runner. Definitions are stored in protractor.conf.js. e2e tests should be created in the separate e2e folder at the root of the project. Note! in v6 of angular-cli main structure will be adjusted. Protractor uses [Selenium](https://www.seleniumhq.org/) for driving e2e test in the different browsers. In turn Selenium requires JDK (Java Developer Kit) to run on testing machine.


### Unit test this project
- run unit test using `ng test`. Turn of breaking tests using x before suite definition
- 

