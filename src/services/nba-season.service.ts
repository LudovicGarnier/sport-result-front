import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NbaSeasonDto } from '../dto/nba-season-dto';

@Injectable({
  providedIn: 'root'
})
export class NbaSeasonService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllSeasons(): Observable<NbaSeasonDto[]> {    
    return this.http.get<NbaSeasonDto[]>(`${this.apiUrl}/nbaSeason/all`);
  }
}
