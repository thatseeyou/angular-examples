import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'widget-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
})

export class StepperComponent implements OnInit {
    value:number = 0
    @Input('value') set _value(newValue:string) {
        this.value = parseInt(newValue, 10);
    }
    @Output() valueChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    add(diff:number) {
        this.value += diff
        this.valueChange.emit(this.value)
    }
}