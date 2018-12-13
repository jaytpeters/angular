import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players;
  game;

  constructor(private _http:HttpService) {}

  ngOnInit() {
    let observable = this._http.getPlayersList();
    observable.subscribe(data => {
      this.players = data;
    });
  }

  deletePlayer(player) {
    if(confirm('Are you sure you want to remove ' + player.name)) {
      let observable = this._http.deletePlayer(player._id);
      observable.subscribe(data => {
        this.ngOnInit();
      })
    }
  }

}
