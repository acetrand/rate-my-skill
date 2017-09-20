import { Component } from '@angular/core';

export class Skill {
  id: number;
  name: string;
  rate: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rate-my-skill';

  myskill: Skill = {
    id: 1,
    name: 'JavaScript',
    rate: 5
  };
}
