import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbaSeasonComponent } from "../nba-season/nba-season.component";

@Component({
  selector: 'app-root',
  imports: [NbaSeasonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sport-result-front';
}
