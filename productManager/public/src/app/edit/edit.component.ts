import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name;
  image;
  price;
  id;
  errors = "";

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      let observable = this._http.getProduct(this.id);
      observable.subscribe(data => {
        this.name = data['name'];
        this.image = data['image'];
        this.price = data['price'];
      }); 
    });
  }

  update() {
    var price = Number.parseInt(this.price);
    let observable = this._http.updateProduct(this.id, {"name": this.name, "price": price, "image": this.image });
    observable.subscribe(data => {
      if(data['error']) {
        this.errors = data['error'];
      } else
        this._router.navigate(['/products']);  
    }); 
  }
}
