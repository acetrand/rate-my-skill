import { Component, ViewChild, ElementRef } from '@angular/core';
import { Skill } from './skill';
import { SkillAdderComponent } from './skill-adder.component';

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
  skills = SKILLS;
  emptySkill: Skill = {
    id: undefined,
    name: '',
    rate: undefined
  };
  currentSkill: Skill = Object.assign({}, this.emptySkill);

  addToSkills = (event) => {
    const newSkill = Object.assign({}, event.skill);
    newSkill.id = this.skills.length;
    this.skills.push(newSkill);
    this.currentSkill = Object.assign({}, this.emptySkill);
  }
}
