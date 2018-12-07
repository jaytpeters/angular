import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  getWeather(id, key) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + "&APPID=" + key;
    return this._http.get(url);
  }
}
