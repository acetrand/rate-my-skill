import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Skill } from './skill';
import { SkillRaterComponent } from './skill-rater.component';

@Component({
    selector: 'skill-item',
    template: `
        <md-list-item>
            {{skill.name}}
            <skill-rater [skillRate]="skill.rate" (updateSkillRate)="setRate($event)"></skill-rater>
        </md-list-item>
    `
})

export class SkillItemComponent {
    @Input() skill: Skill;
    @Output() skillUpdate = new EventEmitter();

    setRate = event => {
        this.skill.rate = event.rate;
        this.skillUpdate.emit({skill: this.skill});
    }
}
