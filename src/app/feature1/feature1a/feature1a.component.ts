import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../shared/counter/counter.service';
import { Subscription } from 'rxjs/Subscription';
import { Feature1Service } from './feature1a.service';

@Component({
	selector: 'app-feature1a',
	providers: [Feature1Service],
	templateUrl: './feature1a.component.html',
	styleUrls: ['./feature1a.component.css']
})
export class Feature1aComponent implements OnInit {
	title: string = "Feature 1 A";
	count: number = 0;
	onOneUpDownReset$: Subscription;
	constructor(
		private counterSvc: CounterService,
	) { }

	ngOnInit() {
		this.onOneUpDownReset$ = this.counterSvc.onOneUpDownReset$.subscribe((num) => {
			this.onOneUpDownReset(num);
		});
	}

	onOneUpDownReset(num) {
		console.log("onOneUpDownReset: ", num);
		this.count = this.count + num;
	}

}
