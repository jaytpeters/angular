import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    let observable = this._http.getProducts();
    observable.subscribe(data => {
      this.products = data;
    }); 
  }

  edit(id) {
    let url = '/products/edit/' + id;
    this._router.navigate([url]);  
  }

  delete(id) {
    let observable = this._http.onDelete(id);
    observable.subscribe(data => {
      this.ngOnInit();
    }); 
  }
}
