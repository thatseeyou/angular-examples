import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DisplayComponent } from '../widget/display.component';

@Component({
    selector: 'palette',
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})

export class PaletteComponent implements OnInit, AfterViewInit {
    channels:[number] = [128, 128, 128];
    backgroundColor:string = 'rgb(128,128,128)';

    @ViewChildren(DisplayComponent) displays: QueryList<DisplayComponent>;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        // this.displays.map( (item, index) => {
        //     console.log(`[${index}] ${item}`);
        // })
        // viewChildren is set
    }

    onColorChange(channelIndex:number, value:number) {
        this.channels[channelIndex] = value;
        this.backgroundColor = `rgb(${this.channels[0]}, ${this.channels[1]}, ${this.channels[2]})`;
    }
}