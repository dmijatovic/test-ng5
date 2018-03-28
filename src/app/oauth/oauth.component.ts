import { Component, OnInit } from '@angular/core';

/**
 * dummy component to capture redirect from 
 * ADFS server (just for debuggin purposes)
 */
@Component({
  selector: 'app-root',
  template: `
    <!--<h1>Logging you in</h1>-->
  `
})
export class OauthComponent implements OnInit{
  constructor(){
    //debugger
    //get credentials from hash
    /*
    let cred = window.location.hash;
    if (cred){
      console.log("Oauth redirect received", cred);
    }else{
      // console.log("Oauth redirect seem empty");
    }*/
  }
  ngOnInit(){ }
}
