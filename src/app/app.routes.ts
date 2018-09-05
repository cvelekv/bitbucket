import { Routes } from '@angular/router';

import { CreateGameComponent } from './game/create-game/create-game.component';
import { GameListComponent } from './game/game-list/game-list.component';

export const appRoutes: Routes = [
  { path: "games", redirectTo: "/games", pathMatch: "full" },
  { path: "games/new", component: CreateGameComponent },
  { path: "", component: GameListComponent }
];
