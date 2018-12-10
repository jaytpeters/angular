import { Component, OnInit } from '@angular/core';
import { ShintoServiceService } from './../shinto-service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = 0;
  owned = 0;
  amount  = 0;

  constructor(private _shintoService:ShintoServiceService) {}

  ngOnInit() {
    this.value = this.getValue();
    this.owned = this.getOwned();
  }

  getValue() {
    return this._shintoService.value;
  }

  getOwned() {
    return this._shintoService.coins;
  }

  purchase() {
    var id = Math.floor(Math.random()*9999)+1;
    var newLog = {"id": id, action: "Bought", amount: this.amount, value: this._shintoService.value};
    this._shintoService.log.push(newLog);

    this._shintoService.value += +this.amount;
    this._shintoService.coins += +this.amount;
    this.owned = this._shintoService.coins;
    this.value = this._shintoService.value;
    this.amount = 0;
  }
}
