import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaSeasonComponent } from './nba-season.component';

describe('NbaSeasonComponent', () => {
  let component: NbaSeasonComponent;
  let fixture: ComponentFixture<NbaSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaSeasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
