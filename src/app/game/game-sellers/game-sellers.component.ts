import { Component, Input, OnInit } from '@angular/core';

import { ISeller } from '../../models/seller.model';

@Component({
  selector: "app-game-sellers",
  templateUrl: "./game-sellers.component.html"
})
export class GameSellersComponent implements OnInit {
  @Input()
  sellers: ISeller[];
  @Input()
  gameName: string;
  constructor() {}

  ngOnInit() {}
}
