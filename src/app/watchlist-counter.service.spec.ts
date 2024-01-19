import { TestBed } from '@angular/core/testing';

import { WatchlistCounterService } from './watchlist-counter.service';

describe('WatchlistCounterService', () => {
  let service: WatchlistCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
