import { Component } from '@angular/core';
import { GhostsComponent } from "./components/ghosts/ghosts.component";

@Component({
  selector: 'app-home',
  imports: [GhostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
