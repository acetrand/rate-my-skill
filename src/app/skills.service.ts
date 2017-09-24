import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { BackandService } from '@backand/angular2-sdk';

const backandObjectName = 'skills';

@Injectable()
export class SkillsService {
    skills: Skill[];
    constructor(private backand: BackandService) {
        this.backand.init({
            appName: 'ratemyskills',
            anonymousToken: '81eca0c0-4a1f-4d63-ad49-5b14b26d9356'
        });
    }
    getSkills = (): Promise<Skill[]> => {
        return this.backand.object
            .getList(backandObjectName)
            .then(response => response.data)
            .catch(console.error);
    }
    addSkill = (skill: Skill): Promise<any> => {
        return this.backand.object
            .create(backandObjectName, skill)
            .catch(console.error);
    }
    removeSkill = (idToRemove: number): Promise<any> => {
        return this.backand.object
            .remove(backandObjectName, idToRemove)
            .catch(console.error);
    }
    updateSkill = (skillId: number, updatedSkill: Skill): Promise<any> => {
        return this.backand.object
            .update(backandObjectName, skillId, updatedSkill)
            .catch(console.error);
    }
}
