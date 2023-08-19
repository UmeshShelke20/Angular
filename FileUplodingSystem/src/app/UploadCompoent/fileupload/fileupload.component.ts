import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonserviceService } from 'src/app/CommonService/commonservice.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  constructor(private com:CommonserviceService){}
  docform:any
  adharcard:any
  pancard:any
  photo:any
  signature:any

  imageSrc1:any
  imageSrc2:any 
  
  reder= new FileReader()

  ngOnInit(): void {
    this.docform=new FormGroup({
      custId: new FormControl(''),
      custName:new FormControl('')
    })
  }

  onSelectfile1(e:any){
    alert("Hello")
this.adharcard=e.target.files[0];
alert(this.adharcard);
const file=e.target.files[0];
this.reder.onload=a=>this.imageSrc1=this.reder.result;
this.reder.readAsDataURL(file);
  }
  onSelectfile2(e:any){
this.pancard=e.target.files[0];
const file=e.target.files[0];
this.reder.onload=a=>this.imageSrc2=this.reder.result;
this.reder.readAsDataURL(file);
  }
  onSelectfile3(e:any){
this.photo=e.target.files[0];
  }
  onSelectfile4(e:any){
this.signature=e.target.files[0];
  }

  save(){

    alert("wellcome!")
    const document1=JSON.stringify(this.docform.value);

    const uploadDocument=new FormData();

    uploadDocument.append("adharcard",this.adharcard);
    uploadDocument.append("pancard",this.pancard);
    uploadDocument.append("photo",this.photo);
    uploadDocument.append("signature",this.signature);
    uploadDocument.append("doc",document1);

    this.com.docUpload(uploadDocument).subscribe({});
    window.location.reload();
  }

}
