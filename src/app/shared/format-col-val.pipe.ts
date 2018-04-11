import { Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';
import { util } from '../app.config';

@Pipe({
  name: 'formatColVal'
})
export class FormatColVal implements PipeTransform {
  //inject datePipe
  constructor(
    private date:DatePipe
  ){}
  /**
   * FormatColumnValue using transform pipe function
   * @param value: value recevived
   * @param args
   */
  transform(value: any, args?: any): any {
  try{
    //debugger
    let strVal:string="n/a";
    if (value == null ){
      //null value returns n/a string
      return strVal;
    }else{
      strVal = value;
      //check type
      switch (args.type.toLowerCase()){
        case "string":
        case "text":
          //return string value
          //no transformations
          return strVal;
        case "number":
        case "decimal":
        case "integer":
        case "float":
          //format number
          strVal = this.formatNumber(value, args);
          return strVal;
        case "currency":
          strVal = this.formatNumber(value, args);
          //additional transformations pre & post appends
          //after number is formatted
          strVal = args.pre + strVal + args.post;
          return strVal;
        case "date":
        case "time":
        case "datetime":
          strVal = this.formatDate(value, args);
          return strVal;
      }
    }
  }catch(e){
    //warn
    console.warn("formatColVal pipe error...", e);
    //return what you received
    return value;
  }}
  /**
   * Format numerical value using util function
   * Returns string
   * @param val: received value
   * @param col: column definition object
   * @param col.type:string column definition object
   * @param col.dec:number of decimals
   * @param col.sep:thouseds seprator, default "."
   * @param col.dp: decimal point, default ","
   */
  formatNumber(val, col){
    let v = val;
    if (val && col){
      //debugger
      v = util.formatNumber(val,
        col.dec,col.sep, col.dp
      );
    }
    return v;
  }
  /**
   * Format date value using angular date pipe
   * https://angular.io/api/common/DatePipe
   * @param val
   * @param col.format: date format eg YYYY-MM-DD etc. see angular pipe
   * @param col.timezone: timezone indication
   * @param col.locale: locale indication?!?
   */
  formatDate(val, col){
    let v = val;
    if (val && col){
      let d = new Date(val);
      //check parameters
      //format date or time
      //debugger
      v = this.date.transform(val,
        col.format, col.timezone, col.locale
      );
    }
    //return formatted date string value
    return v;
  }
}
