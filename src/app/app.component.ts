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
    title = 'Rate my skills';
    skills: Skill[];
    emptySkill: Skill = {
        id: undefined,
        name: '',
        rate: 0
    };
    currentSkill: Skill = Object.assign({}, this.emptySkill);

    ngOnInit(): void {
        this.getSkills();
    }

    addToSkills = (event) => {
      const newSkill = Object.assign({}, event.skill);
      this.skillsService.addSkill(newSkill);
      this.getSkills();
      this.currentSkill = Object.assign({}, this.emptySkill);
    }

    skillUpdated = (event) => {
        this.skills = this.skills.map( skill => {
            if (skill.id === event.skill.id) {
                skill.rate = event.skill.rate;
            }
            return skill;
        });
    }

    getSkills = () => {
      this.skills = this.skillsService.getSkills();
    }
}
