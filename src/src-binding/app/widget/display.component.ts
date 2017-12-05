import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'widget-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {
    @Input() value:string = '0'

    constructor() { 
        console.log('********* constructor')
        console.log(`value = ${this.value}`)

    }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log('******** ngOnChanges')
        console.dir(changes)
    }
}