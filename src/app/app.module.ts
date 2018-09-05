import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GameSummaryComponent } from "./game/game-summary/game-summary.component";
import { GameStockService } from "./services/game-stock.service";
import { GameSellersComponent } from "./game/game-sellers/game-sellers.component";
import { FormsModule } from "@angular/forms";
import { CreateGameComponent } from './game/create-game/create-game.component';

@NgModule({
  declarations: [AppComponent, GameSummaryComponent, GameSellersComponent, CreateGameComponent],
  imports: [BrowserModule, FormsModule],
  providers: [GameStockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
