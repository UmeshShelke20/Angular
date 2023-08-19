import { Address } from "./address";

export class Student {
   
    id: number = 0;
    name:string=''
    rollno:number=0
    address: Address = {
      id: 0,
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: 0
    }
}
