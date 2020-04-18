import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'reversestring'})
export class ReverseStringPipe implements PipeTransform {
  transform(str: string): string {
    let newStr: string = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str.charAt(i);
    }
    return newStr;
  }
}
