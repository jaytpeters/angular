import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  humidity = 0;
  tempAvg = 0;
  tempHigh = 0;
  tempLow = 0;
  status = "";
  private id = "5809844";
  private key = "46d024ef0c065f1ac6440ce4cc36e536";

  constructor( private _http:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {

      let observable = this._http.getWeather(this.id, this.key);
      observable.subscribe(data => {
        console.log(data);
        this.humidity = data['main']['humidity'];
        this.tempAvg = data['main']['temp'];
        this.tempHigh = data['main']['temp_max'];
        this.tempLow = data['main']['temp_min'];
        this.status = data['weather'][0]['main'];
      })  
    });
  }
}
