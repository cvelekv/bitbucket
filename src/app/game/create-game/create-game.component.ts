import { Component } from '@angular/core';

import { Game } from '../../models/game.model';
import { GameStockService } from './../../services/game-stock.service';

@Component({
  selector: "app-create-game",
  templateUrl: "./create-game.component.html",
  styles: [
    `
      em {
        color: red;
      }
    `
  ]
})
export class CreateGameComponent {
  // @Output()
  // createGameEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private gameStockService: GameStockService) {}
  createGame(formValues: any): void {
    // this.createGameEvent.emit(formValues);
    const game = this.mapper(formValues);
    this.gameStockService.addGame(game);
  }
  private mapper(formValues: any): Game {
    return new Game(
      formValues.name,
      formValues.daterelease,
      formValues.imageurl
    );
  }
}
