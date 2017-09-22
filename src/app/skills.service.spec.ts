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
        
        it('should set the new id to (biggest existing id plus 1)', () => {
            const newSkill = getRandomSkill(),
                skillOne = getRandomSkill(),
                skillTwo = getRandomSkill(),
                skillThree = getRandomSkill();
            
            skillOne.id = 5;
            skillTwo.id = 13;
            skillThree.id = 2;

            skillsService.skills = [skillOne, skillTwo, skillThree];
           
            skillsService.addSkill(newSkill);
            const allSkills = skillsService.getSkills();
            const lastSkill = allSkills[(allSkills.length - 1)];

            expect(lastSkill.id).toBe(13 + 1);
        });

        it('should set the new id to 1 when array is empty', () => {
            const newSkill = getRandomSkill();

            skillsService.skills = [];
           
            skillsService.addSkill(newSkill);
            const allSkills = skillsService.getSkills();
            const lastSkill = allSkills[(allSkills.length - 1)];

            expect(lastSkill.id).toBe(1);
        });
    });
    
    describe('.removeSkill(id)', () => {
        it('should remove skill based on matching id', () => {
            const skillOne = getRandomSkill(),
                skillTwo = getRandomSkill(),
                skillThree = getRandomSkill();

            skillOne.id = 1;
            skillTwo.id = 2;
            skillThree.id = 3;
            skillsService.skills = [skillOne, skillTwo, skillThree];
           
            skillsService.removeSkill(2);

            expect(skillsService.getSkills()).toEqual([skillOne, skillThree]);
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
