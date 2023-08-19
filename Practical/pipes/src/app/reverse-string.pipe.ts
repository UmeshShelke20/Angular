import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
let sname:string=value;
let nsname:string="";
let lengths:number=sname.length;
while(lengths > 0){
    nsname+=sname.charAt(lengths-1) ;
    lengths--;
  }
  return nsname;
  }
//=====================================================================
/*String sname="eklehS hsemaR hsemU";
			String nsname="";
	int lengths=sname.length();
	System.out.println();
	while(lengths>0){
	    nsname+=sname.charAt(lengths-1);
	    lengths--;
	  }
	  System.out.println(nsname);

  */
}
