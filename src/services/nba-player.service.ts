import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NbaPlayerDto } from '../dto/nba-player-dto';

@Injectable({
  providedIn: 'root'
})
export class NbaPlayerService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getActiveNbaPlayers(page: number, size: number, active: boolean): Observable<NbaPlayerDto[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('isActive', active);
    console.log(active);
    
    return this.http.get<NbaPlayerDto[]>(`${this.baseUrl}/nbaPlayer/active`, { params });
  }
}
