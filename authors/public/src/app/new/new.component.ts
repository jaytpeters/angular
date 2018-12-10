import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author = "";
  errors = "";

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
  }

  cancel() {
    this.author = "";
    this._router.navigate(['/']);
  }

  new() {
    let author = {"author": this.author};
    let observable = this._http.onCreate(author);
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error']
      } else
        this._router.navigate(['/']);
    }); 
  }
}
