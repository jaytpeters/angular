import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  gold = 0;
  log = [];

  constructor(private _http:HttpService) {}

  ngOnInit() {
    let observable = this._http.deleteVisits();
    observable.subscribe(data => {
    }); 
  }

  onVisit(loc:String) {
    var newGold = 0;

    if(loc == 'farm')
      newGold = Math.floor(Math.random()*5)+2;
    else if(loc == 'cave')
      newGold = Math.floor(Math.random()*10)+5;
    else if(loc == 'house')
      newGold = Math.floor(Math.random()*15)+7;
    else if(loc == 'casino')
      newGold = Math.floor(Math.random()*200)-100;

    this.gold += newGold;

    var observable = this._http.addVisit(loc,newGold);
    observable.subscribe(data => {
    }); 

    observable = this._http.getVisits();
    observable.subscribe(data => {
      this.log = data;
    })
  }

}
