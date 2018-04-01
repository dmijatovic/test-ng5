import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';

//material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { Routes, RouterModule } from '@angular/router';
import { UserPageTemplate } from '../layout/user/user.component';
import { NameComponent } from './name/name.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { AddressComponent } from './address/address.component';
import { OriginComponent } from './origin/origin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateOverview } from '../oauth2/auth.guard';

const routes = [{
	path: 'user',
	component: UserPageTemplate,
	children: [{
		path: '',
		component: OverviewComponent,
		canDeactivate: [CanDeactivateOverview],
	}]
}]

@NgModule({
	imports: [
		CommonModule,
		//material
		MatFormFieldModule, MatInputModule, MatCheckboxModule,
		MatSelectModule,
		MatRadioModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	declarations: [OverviewComponent, NameComponent, CredentialsComponent, AddressComponent, OriginComponent]
})
export class UserModule { }
