import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

@Component({
    selector: 'skill-adder',
    template: `
        <form class="skill-form">
            <md-form-field>
                <input #nameInput mdInput [(ngModel)]="skill.name" placeholder="Name of skill" name="skill-input" />
            </md-form-field>
            <skill-rater></skill-rater>
            <button (click)="submitSkill()" md-raised-button color="primary">Add skill</button>
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
    @ViewChild('nameInput') skillNameInput: ElementRef;
    @Input() skill: Skill;
    @Output() addSkill = new EventEmitter();

    submitSkill = () => {
        this.addSkill.emit({skill: this.skill});
        this.skillNameInput.nativeElement.focus();
    }
}
