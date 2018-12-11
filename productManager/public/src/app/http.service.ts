import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  onCreate(product) {
    return this._http.post('/', product);
  }

  onDelete(id) {
    let url = '/' + id;
    return this._http.delete(url);
  }

  getProducts() {
    return this._http.get('/products');
  }

  getProduct(id) {
    let url = '/' + id;
    return this._http.get(url);
  }

  updateProduct(id, product) {
    let url = '/' + id;
    return this._http.put(url, product);
  }

}
