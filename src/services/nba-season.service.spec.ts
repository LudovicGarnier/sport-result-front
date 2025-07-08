import { TestBed } from '@angular/core/testing';

import { NbaSeasonService } from './nba-season.service';

describe('NbaSeasonService', () => {
  let service: NbaSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
