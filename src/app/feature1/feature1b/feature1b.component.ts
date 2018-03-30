import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1b',
  templateUrl: './feature1b.component.html',
  styleUrls: ['./feature1b.component.css'],
  host: {
		"class": "app-body-content"
	}
})
export class Feature1bComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
