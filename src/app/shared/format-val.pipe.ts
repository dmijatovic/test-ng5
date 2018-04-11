import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatVal'
})
export class FormatValPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
