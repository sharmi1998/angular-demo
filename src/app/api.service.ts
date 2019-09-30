import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  insertData(data){
    return this.http.post("https://recipie-fsd.herokuapp.com/read",data)
  }

getData(){
  return this.http.get("https://recipie-fsd.herokuapp.com/viewall")
}
searchData(data){
  return this.http.get("https://recipie-fsd.herokuapp.com/search/"+data)
}
deleteData(data){
  return this.http.post("https://recipie-fsd.herokuapp.com/delete/",data)
}
updateData(data){
  return this.http.post("https://recipie-fsd.herokuapp.com/update",data)
}
}
