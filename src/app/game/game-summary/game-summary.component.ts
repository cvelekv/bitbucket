import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from '../../models/game.model';

@Component({
  selector: "app-game-summary",
  templateUrl: "./game-summary.component.html"
})
export class GameSummaryComponent implements OnInit {
  @Input()
  game: Game;
  @Output()
  gameChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  selectedGame(gameName: string) {
    console.log(gameName);
    this.gameChange.emit(gameName);
  }
}
