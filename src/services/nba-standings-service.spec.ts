import { TestBed } from '@angular/core/testing';

import { NbaStandingsService } from './nba-standings-service';

describe('NbaStandingsServiceService', () => {
  let service: NbaStandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaStandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
