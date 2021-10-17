import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {

  transform(list: any[], propertyName: any): any {
    console.log(propertyName);
    return list.reduce((a, b) => a + b[propertyName], 0);
  }

}
