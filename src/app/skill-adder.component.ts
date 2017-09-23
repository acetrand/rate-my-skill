import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

@Component({
    selector: 'skill-adder',
    template: `
        <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" class="skill-form">
            <md-form-field>
                <input 
                    #nameInput 
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
			border-bottom: 1px solid rgba(0,0,0,.12);
        }
        input { margin-right: 1rem; }
		button { margin-left: auto; }
    `]
})

export class SkillAdderComponent {
    @ViewChild('nameInput') skillNameInput: ElementRef;
    @Input() skill: Skill;
    @Output() addSkill = new EventEmitter();

    onSubmit(form) {
        this.skillNameInput.nativeElement.focus();
        if (!this.skill.name) {
            return;
        }
        this.addSkill.emit({skill: this.skill});
        form.resetForm();
    }

    setRate = event => this.skill.rate = event.rate;
}
