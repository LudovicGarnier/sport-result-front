import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NbaStandingsDto } from '../dto/nba-standings-dto';

@Injectable({
  providedIn: 'root'
})
export class NbaStandingsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllNbaStandingsByYear(seasonYear: number): Observable<NbaStandingsDto[]> {
    return this.http.get<NbaStandingsDto[]>(`${this.apiUrl}/nbaStandings/year?seasonYear=${seasonYear}`);
  }

  getAllNbaStandingsByConferenceAndByYear(seasonYear: number, conferenceName: string): Observable<NbaStandingsDto[]> {
    return this.http.get<NbaStandingsDto[]>(`${this.apiUrl}/nbaStandings/yearAndConference?seasonYear=${seasonYear}&conferenceName=${conferenceName}`);
  }
}
