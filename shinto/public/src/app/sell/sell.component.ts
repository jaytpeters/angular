import { Component, OnInit } from '@angular/core';
import { ShintoServiceService } from './../shinto-service.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
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

  sell() {
    if(Number.isInteger(+this.amount) && this.amount > 0) {
      var id = Math.floor(Math.random()*9999)+1;
      var newLog = {"id": id, action: "Sold", amount: this.amount, value: this._shintoService.value};
      this._shintoService.log.push(newLog);

      this._shintoService.value -= +this.amount;
      this._shintoService.coins -= +this.amount;
      this.owned = this._shintoService.coins;
      this.value = this._shintoService.value;
    }
    this.amount = 0;
  }
}
