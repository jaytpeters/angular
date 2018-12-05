import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  getVisits() {    
    return this._http.get('/visits');
  }

  addVisit(loc:String, gold:Number) {
    return this._http.post('/visit',{"loc":loc,"gold":gold});
  }

  deleteVisits() {
    return this._http.delete('/');
  }
}
