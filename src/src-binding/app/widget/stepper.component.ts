import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'widget-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
})

export class StepperComponent implements OnInit {
    @Input() value:number = 0;
    @Output() valueChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    add(diff:number) {
        this.value += diff
        this.valueChange.emit(this.value)
    }
}