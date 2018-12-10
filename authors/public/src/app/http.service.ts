import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  onCreate(author:any) {
    return this._http.post('/new',author);
  }

  onGetAuthors() {
    return this._http.get('/authors');
  }

  onGetAuthor(id:String) {
    let url = '/' + id;
    return this._http.get(url);
  }

  onUpdateAuthor(id, author:any) {
    let url = '/' + id;
    return this._http.put(url, author);
  }

  onDeleteAuthor(id:String) {
    let url = '/' + id;
    return this._http.delete(url);
  }
}
