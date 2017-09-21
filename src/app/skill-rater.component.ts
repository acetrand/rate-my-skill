import { Component } from '@angular/core';

const RATES = [
    { value: 0, selected: true },
    { value: 1, selected: false },
    { value: 2, selected: false },
    { value: 3, selected: false },
    { value: 4, selected: false },
    { value: 5, selected: false },
];

@Component({
    selector: 'skill-rater',
    template: `
        <ul>
            <li (click)="updateRate(rate)" *ngFor="let rate of rates" [ngClass]="{'selected': rate.selected}">{{rate.value}}</li>
        </ul>
    `,
    styleUrls: ['./skill-rater.component.css']
})

export class SkillRaterComponent {
    rates = RATES;

    updateRate = (clickedRate) => {
        if (clickedRate.selected) {
            return;
        }

        this.rates = this.rates.map(toggleSelected);

        function toggleSelected(rate) {
            rate.selected = rate.value === clickedRate.value;
            return rate;
        }
    }
}
