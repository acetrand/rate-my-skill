import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
            <li (click)="selectRate(rate)" *ngFor="let rate of rates" [ngClass]="{'selected': rate.selected}">{{rate.value}}</li>
        </ul>
    `,
    styleUrls: ['./skill-rater.component.css']
})

export class SkillRaterComponent implements OnInit {
    @Input() skillRate: number;
    @Output() updateSkillRate = new EventEmitter();

    rates = RATES;

    ngOnInit(): void {
        const selectedRate = this.rates.filter( rate => this.skillRate === rate.value);
        if (!selectedRate) {
            return;
        }

        this.selectRate(selectedRate);
    }

    selectRate = (clickedRate) => {
        if (clickedRate.selected) {
            return;
        }

        this.rates = this.rates.map(toggleSelected);
        this.updateSkillRate.emit({rate: clickedRate.value});

        function toggleSelected(rate) {
            rate.selected = rate.value === clickedRate.value;
            return rate;
        }
    }
}
