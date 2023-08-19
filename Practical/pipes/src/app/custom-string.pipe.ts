import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class CustomStringPipe implements PipeTransform {
public nname:string='';
/*transform(value: string, ...args: number[]): number {
    console.log(value);
    console.log(args);
    return value.length;
  }
   */
  transform(value: string, ...args: string[]): string {
    console.log(value);
    console.log(args);
    return value+"&"+args[0]+args[1];
  }
  
  }
