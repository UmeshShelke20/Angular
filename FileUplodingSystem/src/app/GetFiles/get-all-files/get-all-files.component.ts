import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/CommonService/commonservice.service';

@Component({
  selector: 'app-get-all-files',
  templateUrl: './get-all-files.component.html',
  styleUrls: ['./get-all-files.component.css']
})
export class GetAllFilesComponent implements OnInit {

  retriveDoc:any
  constructor(private com:CommonserviceService){

  }
  ngOnInit(): void {
    this.images();
  }
  images(){
    this.com.getData().subscribe((d:Document[])=>{
this.retriveDoc=d
    });
  }

}
