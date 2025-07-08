import { Component, OnInit } from '@angular/core';
import { NbaPlayerDto } from '../dto/nba-player-dto';
import { NbaPlayerService } from '../services/nba-player.service';

@Component({
  selector: 'app-nba-player-table',
  imports: [],
  templateUrl: './nba-player-table.component.html',
  styleUrl: './nba-player-table.component.css'
})
export class NbaPlayerTableComponent implements OnInit {
  players: NbaPlayerDto[] = [];
  currentPage = 0;
  pageSize = 10;
  active = true;
  loading = false;
  error: string | null = null;

  constructor(private nbaPlayerService: NbaPlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.loading = true;
    this.error = null;

    this.nbaPlayerService.getActiveNbaPlayers(this.currentPage, this.pageSize, this.active)
      .subscribe({
        next: (players) => {
          this.players = players;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Erreur lors du chargement des données';
          this.loading = false;
          console.error('Error loading players:', error);
        }
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPlayers();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPlayers();
    }
  }

  changePageSize(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 0;
    this.loadPlayers();
  }

  // Méthode alternative pour gérer l'événement de changement de taille
  onPageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newSize = parseInt(target.value, 10);
    this.changePageSize(newSize);
  }

  getStatusText(isActive: boolean): string {
    return !isActive ? 'Actif' : 'Inactif';
  }

  formatDate(dateString: string): string {
  if (!dateString || dateString === 'null' || dateString === 'undefined') {
    return ' - ';
  }
  return dateString;
}
}
