import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Skill } from './skill';

@Component({
    selector: 'skill-adder',
    template: `
        <form class="skill-form">
            <md-form-field class="form-inputs">
                <input #nameInput mdInput [(ngModel)]="skill.name" placeholder="Name of skill" name="skill-input" />
            </md-form-field>
            <md-form-field class="form-inputs" class="number-input">
                <input mdInput [(ngModel)]="skill.rate" placeholder="Rate of skill" type="number" name="rate-input" />
            </md-form-field>
            <button (click)="submitSkill()" md-raised-button color="primary" class="form-inputs">Add skill</button>
        </form>
    `,
    styles: [`
        .skill-form {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .form-inputs { margin-right: 1rem; }
        .number-input { width: 10rem; }
        button { margin-left: auto; }
    `]
})

export class SkillAdderComponent {
    @ViewChild('nameInput') skillNameInput: ElementRef;
    @Input() skill: Skill;
    @Output() addSkill = new EventEmitter();

    submitSkill = () => {
        this.addSkill.emit({skill: this.skill});
        this.skillNameInput.nativeElement.focus();
    }
}
