import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {};
  id = "";
  errors = "";

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];

      let observable = this._http.onGetAuthor(this.id);
      observable.subscribe(data => {
         this.author = data;
      }); 
    });
  }

  cancel() {
    this.author = {};
    this._router.navigate(['/']);
  }

  update() {
    let observable = this._http.onUpdateAuthor(this.id, this.author);
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error'];
      } else
        this._router.navigate(['/']);
    }); 
  }

}
