import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthOfNumber'
})
export class LengthOfNumberPipe implements PipeTransform {
/*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
*/
transform(value: number, ...args: unknown[]): unknown {
  let num:number=value;
  let numcount:number=0;
  let reverseNumber:number=0;
  for(;num>0;) {
    numcount++;
    let digits= num%10;
    reverseNumber=(reverseNumber*10)+digits;
    num=Math.floor(num/10) ;
  }
  console.log(reverseNumber);
return "      Length of Number is:"+numcount;
}
}
