import { TestBed } from '@angular/core/testing';

import { NbaTeamService } from './nba-team.service';

describe('NbaTeamService', () => {
  let service: NbaTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
