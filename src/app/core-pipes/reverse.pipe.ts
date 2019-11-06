import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.info(value, args)
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    if (args[0] == 'quotes') {
      return '(' + newStr + ')';
    }
    if (args[1] == 'hash') {
      return '#' + newStr + '#';
    }

    return newStr;
  }

}
