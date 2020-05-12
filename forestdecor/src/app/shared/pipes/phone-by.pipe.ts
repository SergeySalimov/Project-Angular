import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneBY'
})
export class PhoneBYPipe implements PipeTransform {

  transform(value: number |  string, cut = true): string {
    let newVal = value.toString().replace(/\D/g, '');

    if (cut) newVal = newVal.substring(0, 9);

    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '($1)');
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})/, '($1) $2');
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/, '($1) $2-$3');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/, '($1) $2-$3-$4');
    } else {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d*)/, '($1) $2-$3-$4');
    }
    return newVal;
  }
}
