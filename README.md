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
- insert user.service 