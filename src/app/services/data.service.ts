import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  getSpends(date:string){
    return this.http.post("https://flats.pythonanywhere.com/api/v1/finances/get-spend", {
      "date": date,
    })
  }
  
  getData() {
    return this.http.get("https://api.quotable.io/random")
  }
}
