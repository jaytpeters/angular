import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name;
  price;
  image;
  errors = "";

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.name = "";
    this.price = "";
    this.image = "";
  }

  create() {
    var price = Number.parseInt(this.price);
    let observable = this._http.onCreate({"name": this.name, "price": price, "image": this.image});
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error'];
      } else
        this._router.navigate(['/products']);  
    }); 
  }

  cancel() {
    this.ngOnInit();
    this._router.navigate(['/products']);
  }
}
