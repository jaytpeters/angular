import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {     
  }

  onCreate(task:any) {
    return this._http.post('/',task);
  }

  onGetTasks() {
    return this._http.get('/tasks');
  }

  onGetTask(id:Number) {
    let url = '/' + id;
    return this._http.get(url);
  }

  onUpdateTask(id, task:any) {
    let url = '/' + id;
    return this._http.put(url, task);
  }

  onDeleteTask(task:any) {
    let url = '/' + task._id;
    return this._http.delete(url);
  }
}
