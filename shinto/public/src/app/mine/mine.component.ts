import { Component, OnInit } from '@angular/core';
import { ShintoServiceService } from './../shinto-service.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer = "";

  constructor(private _shintoService:ShintoServiceService) {}

  ngOnInit() {
  }

  submitAnswer() {
    if(this.answer == "8") {
      var id = Math.floor(Math.random()*9999)+1;
      var newLog = {"id": id, action: "Mined", amount: 1, value: this._shintoService.value};
      this._shintoService.log.push(newLog);
      this.answer = "";
      this._shintoService.coins++;
      this._shintoService.value++;
    } else {
      this.answer = "";
    }
  }
}
