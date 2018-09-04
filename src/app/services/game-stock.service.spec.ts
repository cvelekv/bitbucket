import { TestBed, inject } from '@angular/core/testing';

import { GameStockService } from './game-stock.service';

describe('GameStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStockService]
    });
  });

  it('should be created', inject([GameStockService], (service: GameStockService) => {
    expect(service).toBeTruthy();
  }));
});
