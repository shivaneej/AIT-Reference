import { Pipe, PipeTransform } from '@angular/core';

//Custom pipe with parameters
/*
@Pipe({name: 'joinName'})
export class JoinNamePipe implements PipeTransform {
  transform(first: string, last: string): string {
    return first.concat(" ",last);
  }
}
*/

//Custom pipe with inbuilt pipe TitleCasePipe
import { TitleCasePipe } from '@angular/common';
@Pipe({name: 'joinName'})
export class JoinNamePipe implements PipeTransform {
  constructor(public titleCasePipe: TitleCasePipe) {
  }
  transform(first: string, last: string): string {
     let fullName = first.concat(" ",last);
    return this.titleCasePipe.transform(fullName); 
  }
}
