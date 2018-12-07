import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  addCake(cake) {
    return this._http.post('/',cake);
  }

  getCakes() {
    return this._http.get('/cakes');
  }

  getCake(cake) {
    let url = '/' + cake._id;
    return this._http.get(url);
  }

  addComment(id, rating, comment) {
    let newComment = {"rating":rating, "comment":comment};
    let url = '/' + id;
    return this._http.put(url, newComment);
  }
}
