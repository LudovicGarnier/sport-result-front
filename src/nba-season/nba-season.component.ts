import { Component, OnInit } from '@angular/core';
import { NbaSeasonDto } from '../dto/nba-season-dto';
import { NbaSeasonService } from '../services/nba-season.service';

@Component({
  selector: 'app-nba-season',
  standalone: true,
  imports: [],
  templateUrl: './nba-season.component.html',
  styleUrl: './nba-season.component.css'
})
export class NbaSeasonComponent implements OnInit {
  seasons: NbaSeasonDto[] = [];
  loading = true;
  error: string | null = null;

  constructor(private nbaService: NbaSeasonService) { }

  ngOnInit(): void {
    this.loadSeasons();
  }

  loadSeasons(): void {
    this.loading = true;
    this.error = null;

    this.nbaService.getAllSeasons().subscribe({
      next: (data) => {
        this.seasons = data.sort((a, b) => b.year - a.year); 
        this.loading = false;
      },
      error: (err) => {
        console.error('Error while loading seasons:', err);
        this.error = 'Error while loading datas. Check API access.';
        this.loading = false;
      }
    });
  }

}