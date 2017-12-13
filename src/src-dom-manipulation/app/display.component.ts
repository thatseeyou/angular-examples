import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'widget-display',
    template: `<span>{{value}}</span>`
})
export class DisplayComponent implements OnInit {
    @Input() value:string = '0'

    constructor() { }

    ngOnInit() { }
}