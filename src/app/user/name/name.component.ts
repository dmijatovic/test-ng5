import { Component, OnInit, Input } from '@angular/core';

import { ControlContainer } from '@angular/forms';

@Component({
	selector: 'app-name',
	templateUrl: './name.component.html',
	styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
	@Input() title: string = "";
	@Input() oFormElems = [];

	constructor(
		public controlContainer: ControlContainer
	) { }

	ngOnInit() {
	}

}
