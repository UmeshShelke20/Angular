
import { Student } from "./student";

export class SchoolClass {
 
    id:number=0;
    classname:String='';
    students:Student[]=[{
        id: 0,
        name:'',
        rollno:0,
        address:{
          id: 0,
          city: "",
          taluka: "",
          district: "",
          state: "",
          pincode: 0
        }
        }]
}
