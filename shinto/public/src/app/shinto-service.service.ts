import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShintoServiceService {
  coins:number = 0;
  value=1;
  log = [];
  constructor(private _http:HttpClient) {     
  }
}
