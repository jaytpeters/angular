import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  constructor(private _http:HttpService) {}
  ngOnInit() {
  }

  // San Jose
  // http://api.openweathermap.org/data/2.5/weather?id=5392171&APPID=46d024ef0c065f1ac6440ce4cc36e536

  // Burbank
  // http://api.openweathermap.org/data/2.5/weather?id=5331836&APPID=46d024ef0c065f1ac6440ce4cc36e536

  // Chicago
  // http://api.openweathermap.org/data/2.5/weather?id=4887398&APPID=46d024ef0c065f1ac6440ce4cc36e536

  // Dallas
  // http://api.openweathermap.org/data/2.5/weather?id=4190598&APPID=46d024ef0c065f1ac6440ce4cc36e536

  // Seattle
  // http://api.openweathermap.org/data/2.5/weather?id=5809844&APPID=46d024ef0c065f1ac6440ce4cc36e536

  // Washington DC
  // http://api.openweathermap.org/data/2.5/weather?id=4138106&APPID=46d024ef0c065f1ac6440ce4cc36e536
}
