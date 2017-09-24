import { MockedSkillsService } from './mocked.skills.service';
import { Skill } from './skill';

describe('Service: SkillsService', () => {
    const mockedSkillsService = new MockedSkillsService();

    describe('.getSkills()', () => {
        it('should return an array', () => {
            const skills = mockedSkillsService.getSkills();
            expect(skills instanceof Array).toBeTruthy();
        });

        it('should return the array of skills set on service', () => {
            const mockedSkills = [getRandomSkill(), getRandomSkill()];
            mockedSkillsService.skills = mockedSkills;

            expect(mockedSkillsService.getSkills()).toBe(mockedSkills);
        });
    });

    describe('.addSkill()', () => {
        it('should add the passed skill to the skills array', () => {
            const newSkill = getRandomSkill(),
                skillsArray = [getRandomSkill(), getRandomSkill()];
            mockedSkillsService.skills = skillsArray;
           
            mockedSkillsService.addSkill(newSkill);

            expect(mockedSkillsService.getSkills()[2]).toBe(newSkill);
        });
        
        it('should set the new id to (biggest existing id plus 1)', () => {
            const newSkill = getRandomSkill(),
                skillOne = getRandomSkill(),
                skillTwo = getRandomSkill(),
                skillThree = getRandomSkill();
            
            skillOne.id = 5;
            skillTwo.id = 13;
            skillThree.id = 2;

            mockedSkillsService.skills = [skillOne, skillTwo, skillThree];
           
            mockedSkillsService.addSkill(newSkill);
            const allSkills = mockedSkillsService.getSkills();
            const lastSkill = allSkills[(allSkills.length - 1)];

            expect(lastSkill.id).toBe(13 + 1);
        });

        it('should set the new id to 1 when array is empty', () => {
            const newSkill = getRandomSkill();

            mockedSkillsService.skills = [];
           
            mockedSkillsService.addSkill(newSkill);
            const allSkills = mockedSkillsService.getSkills();
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
            mockedSkillsService.skills = [skillOne, skillTwo, skillThree];
           
            mockedSkillsService.removeSkill(2);

            expect(mockedSkillsService.getSkills()).toEqual([skillOne, skillThree]);
        });
    });

    describe('.updateRate()', () => {
        it('should update rate based on matching id', () => {
            const skillOne = getRandomSkill(),
                skillTwo = getRandomSkill();

            skillOne.id = 1;
            skillTwo.id = 2;
            skillTwo.rate = 2;

            mockedSkillsService.skills = [skillOne, skillTwo];
           
            mockedSkillsService.updateRate(2, 5);

            expect(mockedSkillsService.getSkills()[1].rate).toEqual(5);
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
