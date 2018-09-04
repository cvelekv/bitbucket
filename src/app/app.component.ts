import { Component, OnInit } from '@angular/core';

import { Game } from './models/game.model';
import { ISeller } from './models/seller.model';
import { GameStockService } from './services/game-stock.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "User Interactions Demo";
  games: Game[];
  show = true;
  selectedGameInfo: string;
  sellers: ISeller[];

  constructor(private gameStockService: GameStockService) {}

  ngOnInit() {
    this.games = this.gameStockService.getGames();
  }

  gameChangeHandler($event: any) {
    const sellers = this.gameStockService.getGameSellers($event);
    const selectedGame = this.gameStockService.getGame($event);
    this.selectedGameInfo = `${
      selectedGame.name
    }, Age: ${selectedGame.getYearFromRelease()}`;
    this.sellers = sellers && sellers.length > 0 ? sellers : [];
  }
}
