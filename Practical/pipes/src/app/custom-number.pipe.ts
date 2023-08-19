import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EvenOdd'
})
export class CustomNumberPipe implements PipeTransform {
public rval:string='';
  transform(value: number, ...args: string[]): string {
    
    if(value %2 == 0 ){
      this.rval="Enter number :"+value+"   is Even Number"
    }
    else{
      this.rval ="Enter number :"+value+"    is Odd Number"
    }
    return this.rval;
  }

} 
