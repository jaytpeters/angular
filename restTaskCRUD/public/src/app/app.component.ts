import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  newTask = {title: "", description: ""};
  editTask = {_id: "", title: "", description: ""};
  tasks = undefined;

  constructor(private _http:HttpService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  onCreate() {
    let observable = this._http.onCreate(this.newTask);
    observable.subscribe(data => {
      this.newTask = {title: "", description: ""};
      this.getAllTasks();
    }); 
  }

  getAllTasks() {
    let observable = this._http.onGetTasks();
    observable.subscribe(data => {
      this.tasks = data;
    }); 
  }

  onEdit(thisTask) {
    let observable = this._http.onGetTask(thisTask._id);
    observable.subscribe(data => {
      this.editTask = data;
    }); 
  }

  onUpdate() {
    let observable = this._http.onUpdateTask(this.editTask._id, this.editTask);
    observable.subscribe(data => {
       this.editTask = {_id: "", title: "", description: ""};
       this.getAllTasks();
    }); 
  }

  onDelete(thisTask) {
    let observable = this._http.onDeleteTask(thisTask);
    observable.subscribe(data => {
      this.getAllTasks();
   }); 
 }
}
