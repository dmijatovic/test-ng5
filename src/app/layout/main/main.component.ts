import { Component, OnInit } from '@angular/core';

import { app_config as cfg } from '../../app.config';

@Component({
  selector: 'app-main-page-template',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageTemplate implements OnInit {
  appTitle = cfg.appTitle;
  menuItems = cfg.menuItems;
  constructor() { }

  ngOnInit() {
  }

}
