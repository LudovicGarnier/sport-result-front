import { Component, OnInit } from '@angular/core';
import { NbaStandingsDto } from '../dto/nba-standings-dto';
import { NbaStandingsService } from '../services/nba-standings-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-nba-standings-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nba-standings-table.component.html',
  styleUrls: ['./nba-standings-table.component.css']
})
export class NbaStandingsTableComponent implements OnInit {
  eastStandings: NbaStandingsDto[] = [];
  westStandings: NbaStandingsDto[] = [];
  yearControl = new FormControl(2019);
  loading: boolean = false;
  error: string | null = null;

  constructor(private nbaService: NbaStandingsService) {
    this.yearControl.valueChanges.subscribe(year => {
      if (year && year >= 2010 && year <= 2025) {
        this.loadStandings();
      }
    });
  }

  ngOnInit(): void {
    this.loadStandings();
  }

  loadStandings(): void {
    
    const year = this.yearControl.value;
    console.log(year);
    
    if (!year) return;

    this.loading = true;
    this.error = null;
    
    this.nbaService.getAllNbaStandingsByConferenceAndByYear(year, 'west').subscribe({
      next: (data) => {
        this.westStandings = data.sort((a, b) => a.conferenceRank - b.conferenceRank );
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error While Loading Datas. Check API Access.';
        this.loading = false;
        console.error(err);
      }
    });
        this.nbaService.getAllNbaStandingsByConferenceAndByYear(year, 'east').subscribe({
      next: (data) => {
        this.eastStandings = data.sort((a, b) => a.conferenceRank - b.conferenceRank );
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error While Loading Datas. Check API Access.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}