import { Component } from '@angular/core';
import { NbaSeasonComponent } from "../nba-season/nba-season.component";
import { NbaTeamComponent } from "../nba-team/nba-team.component";
import { NbaPlayerTableComponent } from "../nba-player-table/nba-player-table.component";
import { NbaStandingsTableComponent } from "../nba-standings-table/nba-standings-table.component";

@Component({
  selector: 'app-root',
  imports: [NbaSeasonComponent, NbaTeamComponent, NbaPlayerTableComponent, NbaStandingsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sport-result-front';
}
