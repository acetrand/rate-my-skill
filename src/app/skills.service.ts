import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { SKILLS } from './mock-skills';

@Injectable()
export class SkillsService {
    getSkills = (): Skill[] => SKILLS;
}
