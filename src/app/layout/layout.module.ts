//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//material
import { 
  MatMenuModule, 
  MatIconModule,
  MatButtonModule
} from '@angular/material';

//app components
import { HelpPageTemplate } from './help/help.component';
import { MainPageTemplate } from './main/main.component';
import { UserPageTemplate } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HelpPageTemplate, 
    MainPageTemplate, UserPageTemplate
  ]
})
export class LayoutModule { }
