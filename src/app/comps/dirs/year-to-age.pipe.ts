import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearToAge'
})
export class YearToAgePipe implements PipeTransform {

  transform(birthYear: number/*, ...args: any[]*/): /*any*/ number {
    let thisYear = new Date().getFullYear()
    return thisYear - birthYear
  }

}
