import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StatusComponent } from './status/status.component';
import { StatusGameComponent } from './status-game/status-game.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent, children: [
    { path: 'list', component: PlayersListComponent },
    { path: 'addPlayer', component: AddPlayerComponent }
  ] },
  { path: 'status', component: StatusComponent, children: [
    { path: 'game/:id', component: StatusGameComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
