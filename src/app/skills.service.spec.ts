import { SkillsService } from './skills.service';
import { Skill } from './skill';

describe('Service: SkillsService', () => {
    const skillsService = new SkillsService();

    describe('.getSkills()', () => {
        it('should return an array', () => {
            const skills = skillsService.getSkills();
            expect(skills instanceof Array).toBeTruthy();
        });

        it('should return the array of skills set on service', () => {
            const mockedSkills = [getRandomSkill(), getRandomSkill()];
            skillsService.skills = mockedSkills;

            expect(skillsService.getSkills()).toBe(mockedSkills);
        });
    });

    describe('.addSkill()', () => {
        it('should add the passed skill to the skills array', () => {
            const newSkill = getRandomSkill(),
                skillsArray = [getRandomSkill(), getRandomSkill()];
            skillsService.skills = skillsArray;
           
            skillsService.addSkill(newSkill);

            expect(skillsService.getSkills()[2]).toBe(newSkill);
        });
    });

    function getRandomSkill() {
        let skill: Skill;
        skill = {
            id: 0,
            name: 'My random skill nr: ' + Math.floor(Math.random() * 1000),
            rate: Math.floor(Math.random() * 5)
        };
        return skill;
    }
});
