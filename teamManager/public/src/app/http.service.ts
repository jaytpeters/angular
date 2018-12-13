import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {}

  addPlayer(playerData) {
    return this._http.post("/", playerData);
  }

  getPlayersList() {
    return this._http.get("/players");
  }

  deletePlayer(playerID) {
    return this._http.delete("/" + playerID);
  }

  updatePlayer(player) {
    let url = "/" + player._id;
    return this._http.put(url, player);
  }
}
