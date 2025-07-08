import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaTeamComponent } from './nba-team.component';

describe('NbaTeamComponent', () => {
  let component: NbaTeamComponent;
  let fixture: ComponentFixture<NbaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
