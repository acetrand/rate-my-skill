import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { SKILLS } from './mock-skills';

@Injectable()
export class SkillsService {
    skills: Skill[];
    constructor() {
        this.skills = SKILLS.slice();
    }
    getSkills = (): Skill[] => this.skills;
    addSkill = (skill: Skill) => {
        this.skills.push(skill);
    }
}
