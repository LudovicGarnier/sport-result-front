import { TestBed } from '@angular/core/testing';

import { NbaPlayerService } from './nba-player.service';

describe('NbaPlayerService', () => {
  let service: NbaPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
