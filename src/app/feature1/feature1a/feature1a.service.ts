import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class Feature1Service {
	constructor() { }
	count = 6;

	OnUpDownReset = new BehaviorSubject(this.count);
	OnUpDownReset$ = this.OnUpDownReset.asObservable();
	setOnUpDownReset(num) {
		this.OnUpDownReset.next(num);
	}

	tab1count: number = 0;
	tab1OnUpDownReset = new Subject();
	tab1OnUpDownReset$ = this.tab1OnUpDownReset.asObservable();
	tab1SetOnUpDownReset(num) {
		this.tab1count += num;
		this.tab1OnUpDownReset.next(num);
		console.log("Feature1Service::tab1num", num);
	}

	tab2count: number = 0;
	tab2OnUpDownReset = new Subject();
	tab2OnUpDownReset$ = this.tab2OnUpDownReset.asObservable();
	tab2SetOnUpDownReset(num) {
		this.tab2count += num;
		this.tab2OnUpDownReset.next(num);
		console.log("Feature1Service::tab2num", num);
	}

}
