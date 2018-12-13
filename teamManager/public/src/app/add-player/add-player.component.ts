import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  name;
  position;
  errors;

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.name = "";
    this.position = "";
    this.errors = "";
    $('.addButton').attr("disabled","disabled");
    $('.addButton').css("background-color","lightgray");
  }

  addPlayer() {
    let observable = this._http.addPlayer({"name":this.name, "position":this.position});
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error'];
      } else
        this._router.navigate(['/players/list']);
    })
  }

  toggleAddButton(){
    if(this.name.length < 2) {
      $('.addButton').attr("disabled","disabled");
      $('.addButton').css("background-color","lightgray");
    } else {
      $('.addButton').removeAttr("disabled");
      $('.addButton').css("background-color","green");
    }
  }
}
