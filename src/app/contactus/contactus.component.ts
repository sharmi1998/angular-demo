import { Component, OnInit, ɵConsole } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
getName='';
getMail='';
getMsg='';
getNum='';
onSubmit(data:NgForm){
  console.log(data.value);
  // this.getName=data.value.name;
  // this.getMail=data.value.email;
  // this.getMsg=data.value.text;
  // this.getNum=data.value.phone;
this.apiservice.insertData(data.value).subscribe((response)=>{
  console.log(response);
  alert('successfull');
})
}
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
