import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseNumber'
})
export class CustomNumber2Pipe implements PipeTransform {
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
return "Reverse string is : "+reverseNumber;
  }
}
