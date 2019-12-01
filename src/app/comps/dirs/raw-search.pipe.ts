import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rawSearch'
})
export class RawSearchPipe implements PipeTransform {

  // arr -> pupils | rawSearch : search  <- term
  transform(arr: [], term:string): [] {
    console.log('RawSearchPipe transform');
    
    return arr.filter(item => 
      JSON.stringify(item).includes(term)
    ) as []
  }

}
