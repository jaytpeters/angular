import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  parameter;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.parameter = params['cat'];
    });
  }

}
