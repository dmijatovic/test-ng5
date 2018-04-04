import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SortDirective, AppColSort } from './sort.directive';
import { HoverDirective } from './hover.directive';
import { AlertDirective } from './alert.directive';

//import { CounterService } from './counter/counter.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent, SortDirective, AppColSort,
    HoverDirective, AlertDirective
  ],
  exports:[
    CounterComponent, SortDirective, AppColSort,
    HoverDirective, AlertDirective
  ],
  //providers:[ CounterService ]
})
export class SharedModule { }
