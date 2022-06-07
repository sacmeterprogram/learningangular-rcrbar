import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastThree'
})
export class LastThreePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform (values) {
    console.log(values, "ppp");
    if (values) {
      // return values..slice(-3, -1);
      
    }
  }

}
