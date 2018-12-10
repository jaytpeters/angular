import { Component, OnInit } from '@angular/core';
import { ShintoServiceService } from './../shinto-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction = {};
  id;

  constructor(private _shintoService:ShintoServiceService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    let log = this._shintoService.log;
    for(var i = 0; i < log.length; i++) {
      if(log[i]['id'] == this.id) {
        this.transaction = log[i];
      }
    }
  }

}
