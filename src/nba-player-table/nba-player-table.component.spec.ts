import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerTableComponent } from './nba-player-table.component';

describe('NbaPlayerTableComponent', () => {
  let component: NbaPlayerTableComponent;
  let fixture: ComponentFixture<NbaPlayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayerTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
