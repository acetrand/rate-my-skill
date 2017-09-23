import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Skill } from './skill';
import { SkillsService } from './skills.service';
import { SkillAdderComponent } from './skill-adder.component';
import { BackandService } from '@backand/angular2-sdk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SkillsService, BackandService]
})
export class AppComponent implements OnInit {
    constructor(private skillsService: SkillsService, private backand: BackandService) { }
    title = 'Rate my skills';
    skills: Skill[];
    
    ngOnInit(): void {
        this.backand.init({
            appName: 'ratemyskills',
            anonymousToken: '81eca0c0-4a1f-4d63-ad49-5b14b26d9356'
        });
        this.backand.object.getList('skills').then((res: any) => {
            console.log(res);
        });
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
