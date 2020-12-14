import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeCustom',
})
export class RouteCustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return '../../../' + value;
  }
}
