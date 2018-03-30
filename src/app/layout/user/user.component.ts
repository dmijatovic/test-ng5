import { Component, OnInit } from '@angular/core';

import { app_config as cfg } from '../../app.config';

@Component({
  selector: 'app-user-page-template',
  templateUrl: './user.component.html',
  styleUrls: ['../main/main.component.scss']
})
export class UserPageTemplate implements OnInit {
  appTitle = cfg.user.title;
  menuItems = cfg.menuItems;

  constructor() { }

  ngOnInit() {
  }

}
