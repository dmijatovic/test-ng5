import { Component } from '@angular/core';

import { UserService } from './oauth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private user: UserService
  ){}
  ngOnInit(){
    //initialize adfs authenitication process
    this.user.onInit();
  }
}
