import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors;

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    let observable = this._http.onGetAuthors();
    observable.subscribe(data => {
      this.authors = data;
    }); 
  }

  edit(id) {
    var route = "/edit/" + id;
    this._router.navigate([route]);
  }

  delete(id) {
    let observable = this._http.onDeleteAuthor(id);
    observable.subscribe(data => {
      this.ngOnInit();
    }); 
  }
}
