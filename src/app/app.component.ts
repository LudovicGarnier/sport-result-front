import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbaSeasonComponent } from "../nba-season/nba-season.component";
import { NbaTeamComponent } from "../nba-team/nba-team.component";

@Component({
  selector: 'app-root',
  imports: [NbaSeasonComponent, NbaTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sport-result-front';
}
