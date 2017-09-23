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
        const skillIds = this.skills.map(eachSkill => eachSkill.id),
            maxId = Math.max(...skillIds);

        skill.id = maxId === (-Infinity) ? 1 : maxId + 1;
        this.skills.push(skill);
    }
    removeSkill = (idToRemove: number) => {
       this.skills = this.skills.filter(skill => skill.id !== idToRemove );
    }
    updateRate = (skillId: number, newRate: number) => {
        const skillToUpdate = this.skills.filter(eachSkill => eachSkill.id === skillId);
        if (skillToUpdate.length !== 1) {
            throw new Error('Cannot find skill');
        }
        skillToUpdate[0].rate = newRate;
    }
}
