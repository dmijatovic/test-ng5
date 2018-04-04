import { Directive, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAlert]',
  inputs: ['colDef', 'cellValue']
})
export class AlertDirective implements OnChanges {
  colDef;
  cellValue;
  constructor(
    private el:ElementRef
  ){
    console.log("AlertDirective...started");
  }
  /**
   * apply warning class to element if condition satisfied
   */
  ngOnInit(){
    console.log("AlertDirective...onInit..."
      //, this.colDef, this.cellValue
    );
    this.applyWarning();
  }
  applyWarning(){
    //debugger
    if (this.colDef && this.colDef.treshold && this.cellValue){
      if (this.colDef.treshold > this.cellValue){
        this.el.nativeElement.classList.add("custom-alert-class");
      }
    }
  }
  /**
   * This event might be relevant in specific situations too
   */
  ngOnChanges(){
    //console.log("AlertDirective...onChanges...");
  }
}
