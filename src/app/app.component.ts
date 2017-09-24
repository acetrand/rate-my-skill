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
    constructor(private skillsService: SkillsService) { 
        this.skills = [];
    }
    title = 'Rate my skills';
    skills: Skill[];
    initialLoad = false;
    isFetchingSkills = false;
    
    ngOnInit(): void {
        this.getSkills();
    }

    addToSkills = (event) => {
        const newSkill = Object.assign({}, event.skill);
        this.turnOnSpinner();
        this.skillsService
            .addSkill(newSkill)
            .then(this.turnOffSpinner)
            .then(this.getSkills);
    }

    skillUpdated = (event) => {
        this.turnOnSpinner();
        this.skillsService
            .updateSkill(event.skill)
            .then(this.turnOffSpinner)
            .then(this.getSkills);
    }

    deleteSkill = (event) => {
        const skillToDelete = event.skill;
        this.turnOnSpinner();
        this.skillsService
            .removeSkill(skillToDelete.id)
            .then(this.turnOffSpinner)
            .then(this.getSkills);
    }

    getSkills = () => {
        this.turnOnSpinner();
        this.skillsService
            .getSkills()
            .then(skills => {
                this.skills = skills;
                this.initialLoad = true;
            })
            .then(this.turnOffSpinner);
    }

    turnOffSpinner = () => (this.isFetchingSkills = false);
    turnOnSpinner = () => (this.isFetchingSkills = true);
}
