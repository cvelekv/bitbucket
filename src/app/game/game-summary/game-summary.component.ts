import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../models/game.model';

@Component({
  selector: "app-game-summary",
  templateUrl: "./game-summary.component.html",
  styleUrls: ["./game-summary.component.css"]
})
export class GameSummaryComponent implements OnInit {
  @Input()
  game: Game;
  constructor() {}

  ngOnInit() {}
}
