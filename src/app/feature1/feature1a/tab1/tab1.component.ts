import { Component, OnInit } from '@angular/core';
import { Feature1Service } from '../feature1a.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-tab1',
	templateUrl: './tab1.component.html',
	styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

	constructor(
		private f1aSvc: Feature1Service,
	) { }
	count: number = 0;
	tab1OnUpDownReset$: Subscription;

	ngOnInit() {
		this.count = this.f1aSvc.tab1count;
		this.onOneUpDownResetListener();
	}

	onOneUpDownResetListener() {
		this.tab1OnUpDownReset$ = this.f1aSvc.tab1OnUpDownReset$.subscribe((num: number) => {
			this.count += num;
		});
	}
	onOneUpDownReset(num: number) {
		console.log("onOneUpDownReset: ", num);
		this.f1aSvc.tab1SetOnUpDownReset(num);
	}
}
