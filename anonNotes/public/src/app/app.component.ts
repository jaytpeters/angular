import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newNote = "";
  notes;
  errors;

  constructor(private _http:HttpService) {}

  ngOnInit() {
    this.errors = "";
    let observable = this._http.getNotes();
    observable.subscribe(data => {
      this.notes = data;

      for(var i = 0; i < this.notes.length; i ++) {
        var formattedDate = moment(this.notes[i]['createdAt']).format("lll");
        this.notes[i]['createdAt'] = formattedDate;
      }
    });
  }

  addNote() {
    let observable = this._http.addNote({note: this.newNote});
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error']
      } else {
        this.newNote = "";
        this.ngOnInit();
      }
    });
  }
}
