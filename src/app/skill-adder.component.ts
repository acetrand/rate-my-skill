import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

const emptySkill: Skill = {
    id: undefined,
    name: '',
    rate: 0
};

@Component({
    selector: 'skill-adder',
    template: `
        <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" class="skill-form">
            <md-form-field>
                <input 
                    mdInput 
                    [(ngModel)]="skill.name" 
                    placeholder="Name of skill"
                    autocomplete="off" 
                    name="skill-input" 
                    required />
            </md-form-field>
            <skill-rater [skillRate]="skill.rate" (updateSkillRate)="setRate($event)"></skill-rater>
            <button type="submit" md-raised-button color="primary">Add skill</button>
        </form>
    `,
    styles: [`
        .skill-form {
            display: flex;
            align-items: center;
			justify-content: space-between;
        }
        input { margin-right: 1rem; }
		button { margin-left: auto; }
    `]
})

export class SkillAdderComponent {
    @Output() addSkill = new EventEmitter();
    skill: Skill;
    
    constructor() {
        this.skill = Object.assign({}, emptySkill);
    }

    onSubmit(form) {
        if (!this.skill.name) {
            return;
        }
        this.addSkill.emit({skill: this.skill});
        this.skill = Object.assign({}, emptySkill);
        form.resetForm();
    }

    setRate = event => this.skill.rate = event.rate;
}
