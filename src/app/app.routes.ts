import { Routes } from '@angular/router';

import { CreateGameComponent } from './game/create-game/create-game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { CreateSellerComponent } from './seller/create-seller/create-seller.component';

export const appRoutes: Routes = [
  { path: "games", redirectTo: "/games", pathMatch: "full" },
  { path: "games/new", component: CreateGameComponent },
  { path: "seller/new", component: CreateSellerComponent},
  { path: "", component: GameListComponent }
];
