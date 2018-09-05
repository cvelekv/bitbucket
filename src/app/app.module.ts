import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CreateGameComponent } from './game/create-game/create-game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { GameSellersComponent } from './game/game-sellers/game-sellers.component';
import { GameSummaryComponent } from './game/game-summary/game-summary.component';
import { GameStockService } from './services/game-stock.service';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [GameStockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
