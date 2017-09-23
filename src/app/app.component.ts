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
    
    ngOnInit(): void {
        this.getSkills();
    }

    addToSkills = (event) => {
        const newSkill = Object.assign({}, event.skill);
        this.skillsService.addSkill(newSkill);
        this.getSkills();
    }

    skillUpdated = (event) => {
        this.skillsService.updateRate(event.skill.id, event.skill.rate);
    }

    deleteSkill = (event) => {
        const skillToDelete = event.skill;
        this.skillsService.removeSkill(skillToDelete.id);
        this.getSkills();
    }

    getSkills = () => {
        this.skills = this.skillsService.getSkills();
    }
}
