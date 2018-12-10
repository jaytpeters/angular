import { Component, OnInit } from '@angular/core';
import { ShintoServiceService } from './../shinto-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  log;

  constructor(private _shintoService:ShintoServiceService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.log = this._shintoService.log;
  }

  showDetails(id) {
    var route = "/transaction/" + id;
    this._router.navigate([route]);
  }
}
