import { Routes } from '@angular/router';

import { CreateGameComponent } from './game/create-game/create-game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { GameSellersComponent } from './game/game-sellers/game-sellers.component';
import { CreateSellerComponent } from './seller/create-seller/create-seller.component';

export const appRoutes: Routes = [
  { path: "", redirectTo: "/games", pathMatch: "full" },
  { path: "games/new", component: CreateGameComponent },
  { path: "games", component: GameListComponent },
  { path: "games/:id", component: GameSellersComponent },
  { path: "seller/new", component: CreateSellerComponent }
];
