import { Component, OnInit } from '@angular/core';

import { Game } from './../../models/game.model';
import { ISeller } from './../../models/seller.model';
import { GameStockService } from './../../services/game-stock.service';

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html"
})
export class GameListComponent implements OnInit {
  title = "Game List";
  games: Game[];
  selectedGameInfo: string;
  sellers: ISeller[];

  constructor(private gameStockService: GameStockService) {}
  gameChangeHandler($event: any) {
    const sellers = this.gameStockService.getGameSellers($event);
    const selectedGame = this.gameStockService.getGame($event);
    this.selectedGameInfo = `${
      selectedGame.name
    }, Age: ${selectedGame.getYearFromRelease()}`;
    this.sellers = sellers && sellers.length > 0 ? sellers : [];
  }

  // private mapper(formValues: any): Game {
  //   return new Game(
  //     formValues.name,
  //     formValues.daterelease,
  //     formValues.imageurl
  //   );
  // }
  ngOnInit() {
    this.loadGames();
  }
  private loadGames(): void {
    this.games = this.gameStockService.getGames();
  }
}
