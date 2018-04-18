import { Component, OnInit } from '@angular/core';

import { Feature1bService, colDef  } from './feature1b.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-feature1b',
  providers: [ Feature1bService ],
  templateUrl: './feature1b.component.html',
  styleUrls: ['./feature1b.component.css'],
  host: {
		"class": "app-body-content"
	}
})
export class Feature1bComponent implements OnInit {
  loading=true;
  columns=[];
  records=[];

  constructor(
    private data:Feature1bService
  ){}

  ngOnInit() {
    //debugger
    //this.columns = colDef;
    this.getDataSequential();
  }

  getDataSequential(){
    this.data.getId()
    .switchMap((id:any)=>{
      //console.log("Id received...", id);
      //get id first then
      return this.data.getData1(id);
    })
    .subscribe((d:any)=>{
      //console.log("getData1 received...", d);
      //console.log(d);
      this.columns = d.columns;
      this.records = d.records;
    },(e)=>{
      console.error(e)
    },()=>{
      //finaly
      this.loading = false;
    });
  }

  getDataParallel(){
    console.log("Paralel data");
  }
  /**
   * Emitted by AppColSort component
   * @param col
   */
  sortColumn(col){
    console.log("Feature1bComponent...sortColumn...", col);
  }
  /**
   * Emitted by AppSort directive
   * @param col
   */
  chageSort(col){
    console.log("Feature1bComponent...chageSort...", col);
  }

}
