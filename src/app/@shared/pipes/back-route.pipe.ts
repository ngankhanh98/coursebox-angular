import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backRoute',
})
export class BackRoutePipe implements PipeTransform {
  transform(value: any, backLvl: number): any {
    let url = '';

    while (backLvl--) {
      url += '../';
    }
    return url + value;
  }
}
