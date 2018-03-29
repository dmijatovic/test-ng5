import { Component, OnInit, HostListener } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	host: {
		"class": "app-body-content"
	}
})
export class OverviewComponent implements OnInit {
	formMain: FormGroup;

	formGroups = {
		name: {
			title: 'Name',
			fields: [
				{ name: 'firstName', label: 'FirstName', required: true },
				{ name: 'lastName', label: 'LastName', required: true },
			]
		},
		credentials: {
			title: "Credentials",
			fields: [
				{ name: 'username', label: 'username', required: true, type: "text" },
				{ name: 'times', label: 'How many retries', required: true, type: "number" },
				{ name: 'password', label: 'password', required: true, type: 'password' },
				{ name: 'rememberMe', label: 'Remember me', required: true, type: 'checkbox' },
			]
		},
		"address": {
			title: "Address",
			fields: [
				{
					label: "Type",
					name: "type",
					type: "radio",
					required: true,
					options: [
						{ value: '1', label: "Post" },
						{ value: '2', label: "Visit" }
					]
				},

				{ label: "street", name: "street", required: false, },
				{ label: "number", name: "number", required: true, },
				{ label: "zipcode", name: "zipcode", required: true, },
				{
					label: "Country",
					name: "country",
					type: "select",
					required: true,
					options: [
						{ value: 'NL', label: "Nederland" },
						{ value: 'BE', label: "België" }
					]
				},

			]
		},
		// "origin": {
		// 	title: "Origin",
		// 	fields: [
		// 		{ label: "Date of birth", name: "DateOfBirth", required: false, },
		// 		{ label: "Place of birth", name: "PlaceOfBirth", required: false, },
		// 	]
		// }
	}

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit() {
		this.buildForm();
	}

	buildForm() {
		let groups = {}, glist = Object.keys(this.formGroups);

		//debugger
		glist.map((key) => {
			let group = this.formGroups[key];
			let g = this.buildGroup(group.fields);
			groups[key] = g;
		});

		this.formMain = this.fb.group(groups);
	}

	buildGroup(fields) {
		let g = new FormGroup({});

		fields.map((field) => {
			let f: FormControl;
			if (field.type == 'checkbox' && field.required) {
				f = new FormControl(false, Validators.requiredTrue)
			} else if (field.required) {
				f = new FormControl("", Validators.required)
			} else {
				if (field.type == 'checkbox') {
					f = new FormControl(false)
				} else {
					f = new FormControl("")
				}
			}
			g.addControl(field.name, f);
		});

		return g;
	}

	hasUnsavedData() {
		return true;
	}

	@HostListener('window:beforeunload', ['$event'])
	canDeactivate($event) {
		// debugger;
		if (this.hasUnsavedData()) {
			if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
				return true;
			} else {
				return false;
			}
		}
	}
}
