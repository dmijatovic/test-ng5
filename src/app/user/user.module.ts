import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { Routes, RouterModule } from '@angular/router';
import { UserPageTemplate } from '../layout/user/user.component';
import { NameComponent } from './name/name.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { AddressComponent } from './address/address.component';
import { OriginComponent } from './origin/origin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';



const routes = [{
	path: 'user',
	component: UserPageTemplate,
	children: [{
		path: '',
		component: OverviewComponent
	}]

}]


@NgModule({
	imports: [
		CommonModule,
		MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule,MatSelectModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	declarations: [OverviewComponent, NameComponent, CredentialsComponent, AddressComponent, OriginComponent]
})
export class UserModule { }
