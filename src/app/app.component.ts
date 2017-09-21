import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Skill } from './skill';
import { SkillsService } from './skills.service';
import { SkillAdderComponent } from './skill-adder.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SkillsService]
})
export class AppComponent implements OnInit {
    constructor(private skillsService: SkillsService) { }
    title = 'rate-my-skill';
    skills: Skill[];
    emptySkill: Skill = {
        id: undefined,
        name: '',
        rate: undefined
    };
    currentSkill: Skill = Object.assign({}, this.emptySkill);

    ngOnInit(): void {
        this.getSkills();
    }

    addToSkills = (event) => {
      const newSkill = Object.assign({}, event.skill);
      newSkill.id = this.skills.length;
      this.skills.push(newSkill);
      this.currentSkill = Object.assign({}, this.emptySkill);
    }

    getSkills = () => {
      this.skills = this.skillsService.getSkills();
    }
}
