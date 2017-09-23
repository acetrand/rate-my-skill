import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

@Component({
    selector: 'skill-item',
    template: `
        <md-list-item>
            {{skill.name}}
            <skill-rater [skillRate]="skill.rate" (updateSkillRate)="setRate($event)"></skill-rater>
            <md-icon color="accent">delete</md-icon>
        </md-list-item>
	`,
    styles: [`
        skill-rater { margin-left: auto; }
        :host {
            border-bottom: 1px solid rgba(0,0,0,.12);
        }
        md-icon { 
            margin-left: 2rem;
            border: 2px solid transparent;
            border-radius: 50%;
        }
        md-icon:hover {
            border-color: inherit;
            cursor: pointer;
        }
	`]
})

export class SkillItemComponent {
    @Input() skill: Skill;
    @Output() skillUpdate = new EventEmitter();

    setRate = event => {
        this.skill.rate = event.rate;
        this.skillUpdate.emit({skill: this.skill});
    }
}
