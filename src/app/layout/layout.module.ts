import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpPageTemplate } from './help/help.component';
import { MainPageTemplate } from './main/main.component';
import { UserPageTemplate } from './user/user.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HelpPageTemplate, 
    MainPageTemplate, UserPageTemplate
  ]
})
export class LayoutModule { }
