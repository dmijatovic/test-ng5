import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]',
  host:{
    '(mouseenter)': 'onMouseEnter($event.target)',
    '(mouseleave)': 'onMouseLeave($event.target)'
  }
})
export class HoverDirective {
  constructor(
    private el:ElementRef
  ){
    console.log("HoverDirective...started");
  }

  onMouseEnter(e){
    //console.log("Enter custom hover directive element", e);
    //debugger
    e.classList.add("custom-hover-class");
  }

  onMouseLeave(e){
    //console.log("Leave custom hover directive element", e);
    //debugger
    e.classList.remove("custom-hover-class");
  }
}
