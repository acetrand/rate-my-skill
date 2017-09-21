import { Component, Input } from '@angular/core';
import { Skill } from './skill';

@Component({
    selector: 'skill-item',
    template: `<md-list-item>{{skill.name}} - {{skill.rate}}</md-list-item>`
})

export class SkillItemComponent {
    @Input() skill: Skill;
}
