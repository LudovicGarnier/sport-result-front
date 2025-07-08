import { Component, OnInit } from '@angular/core';
import { NbaTeamDto } from '../dto/nba-team-dto';
import { NbaTeamService } from '../services/nba-team.service';

@Component({
  selector: 'app-nba-team',
  imports: [],
  templateUrl: './nba-team.component.html',
  styleUrl: './nba-team.component.css'
})
export class NbaTeamComponent implements OnInit {
  teams: NbaTeamDto[] = [];
  loading = true;
  error: string | null = null;

  constructor(private nbaService: NbaTeamService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.loading = true;
    this.error = null;

    this.nbaService.getAllNbaTeams().subscribe({
      next: (data) => {
        // Order by NickName
        this.teams = data.sort((a, b) => {
          const nickName1 = a.nickname;
          const nickName2 = b.nickname;
          if(nickName1 < nickName2){
            return -1
          } else{
            return 0
          }
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Error while loading teams:', err);
        this.error = 'Error while loading datas. Check API access.';
        this.loading = false;
      }
    });
  }

   onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    console.warn('Erreur lors du chargement de l\'image:', img.src);
  }

}