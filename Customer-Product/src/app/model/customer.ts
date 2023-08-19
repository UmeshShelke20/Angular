import { Product } from "./product";

export class Customer {
    cid:number=0;
cname:string='';
caddress:string='';
cemail:string='';
product:Product={
    pid: 0,
    pname: "",
    pquantity: 0,
    pprice: 0
}
}
