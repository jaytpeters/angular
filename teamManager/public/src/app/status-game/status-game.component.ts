import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status-game',
  templateUrl: './status-game.component.html',
  styleUrls: ['./status-game.component.css']
})
export class StatusGameComponent implements OnInit {
  players;
  game;

  constructor(private _http:HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.game = "game" + params['id'];

      let observable = this._http.getPlayersList();
      observable.subscribe(data => {
        this.players = data;
      })
    })
  }

  changeAction(player,action) {
    if(this.game == "game1") {
      player['game1'] = action;
    } else if(this.game == "game2") {
      player['game2'] = action;
    } else 
      player['game3'] = action;

      console.log(action);
    let observable = this._http.updatePlayer({_id: player._id, game1: player['game1'], game2: player['game2'], game3: player['game3']});
    observable.subscribe(data => {
      let observable = this._http.getPlayersList();
      observable.subscribe(data => {
        this.players = data;
      })      
    })
  }

  checkStatus(player,action) {
    if(this.game == "game1") {
      return player['game1'] == action;
    } else if(this.game == "game2") {
      return player['game2'] == action;
    } else
      return player['game3'] == action;
  }
}
