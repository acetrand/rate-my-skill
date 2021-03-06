import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

@Component({
    selector: 'skill-item',
    template: `
        <md-list-item>
            <span>{{skill.name}}</span>
            <skill-rater [skillRate]="skill.rate" (updateSkillRate)="setRate($event)"></skill-rater>
            <button (click)="deleteSkill()" md-icon-button>
                <md-icon class="md-24">delete</md-icon>
            </button>
        </md-list-item>
	`,
    styles: [`
        skill-rater { margin-left: auto; }
        :host { border-bottom: 1px solid rgba(0,0,0,.12); }
        button { margin-left: 1.5rem; margin-right: -1.5rem }
        md-icon {color: #c7453c; }
        span { margin-left: -0.5rem }
	`]
})

export class SkillItemComponent {
    @Input() skill: Skill;
    @Output() skillUpdate = new EventEmitter();
    @Output() skillDelete = new EventEmitter();

    setRate = event => {
        this.skill.rate = event.rate;
        this.skillUpdate.emit({skill: this.skill});
    }

    deleteSkill = () => {
        this.skillDelete.emit({skill: this.skill});
    } 
}
