import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feature1Service } from '../feature1a.service';

@Component({
	selector: 'app-tab2',
	templateUrl: './tab2.component.html',
	styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

	constructor(
		private f1aSvc: Feature1Service,
	) { }

	count: number = 0;
	tab2OnUpDownReset$: Subscription;

	ngOnInit() {
		this.count = this.f1aSvc.tab2count;
		this.onOneUpDownResetListener();
	}

	onOneUpDownResetListener() {
		this.tab2OnUpDownReset$ = this.f1aSvc.tab2OnUpDownReset$.subscribe((num: number) => {
			this.count += num;
		});
	}
	onOneUpDownReset(num: number) {
		console.log("onOneUpDownReset: ", num);
		this.f1aSvc.tab2SetOnUpDownReset(num);
	}

}
