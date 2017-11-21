import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'widget-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    @Input() value:string = '0'

    constructor() { }

    ngOnInit() { }
}