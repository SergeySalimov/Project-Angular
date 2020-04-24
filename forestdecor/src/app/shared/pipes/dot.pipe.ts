import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: string, max: number = 100): string {
    return value.length <= max ? value : `${value.slice(0, max - 3)}...`;
  }

}
