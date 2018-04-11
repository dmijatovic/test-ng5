import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { CounterComponent } from './counter/counter.component';
import { AppSortDirective, AppColSort } from './sort.directive';
import { HoverDirective } from './hover.directive';
import { AlertDirective } from './alert.directive';

//import { CounterService } from './counter/counter.service'


import { SortService } from './sort.service';
import { FormatColVal } from './format-col-val.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent, AppSortDirective, AppColSort,
    HoverDirective, AlertDirective, FormatColVal
  ],
  exports:[
    CounterComponent, AppSortDirective, AppColSort,
    HoverDirective, AlertDirective, FormatColVal
  ],
  providers:[ DatePipe ]
})
export class SharedModule { }
