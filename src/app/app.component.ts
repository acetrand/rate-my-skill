import { Component } from '@angular/core';
import { Skill } from './skill';

const SKILLS: Skill[] = [
  { id: 1, name: 'JavaScript',  rate: 5},
  { id: 2, name: 'Cooking',     rate: 2},
  { id: 3, name: 'Skiing',      rate: 0},
  { id: 4, name: 'Deadlift',    rate: 3},
];

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

  skills = SKILLS;

  test = () => {
    console.log('not implemented yet');
  }
}
