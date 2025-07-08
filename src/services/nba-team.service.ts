import { Injectable } from '@angular/core';
import { NbaTeamDto } from '../dto/nba-team-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaTeamService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllNbaTeams(): Observable<NbaTeamDto[]> {    
    return this.http.get<NbaTeamDto[]>(`${this.apiUrl}/nbaTeam/nbaFanchise`);
  }
}
