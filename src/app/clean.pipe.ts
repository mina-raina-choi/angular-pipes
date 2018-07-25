import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string, badwords: string): any {
    const badwordList = badwords.split(',')
    for(let bad of badwordList) {
      if(value.indexOf(bad) > -1) {
        value = value.replace(bad, "$%#@!")
      }
    }
    return value;
  }

}
