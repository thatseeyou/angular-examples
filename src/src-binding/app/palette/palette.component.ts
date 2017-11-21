import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'palette',
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})

export class PaletteComponent implements OnInit {
    channels:[number] = [128, 128, 128];
    backgroundColor:string = 'rgb(128,128,128)';

    constructor() { }

    ngOnInit() { }

    onColorChange(channelIndex:number, value:number) {
        this.channels[channelIndex] = value;
        this.backgroundColor = `rgb(${this.channels[0]}, ${this.channels[1]}, ${this.channels[2]})`;
    }
}