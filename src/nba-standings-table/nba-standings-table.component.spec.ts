import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaStandingsTableComponent } from './nba-standings-table.component';

describe('NbaStandingsTableComponent', () => {
  let component: NbaStandingsTableComponent;
  let fixture: ComponentFixture<NbaStandingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaStandingsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
