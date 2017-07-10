import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<div [style.background]="background"></div>`,
    styles: [`
    div {
        width: 100px;
        height: 100px;
    }
    `]
})

export class PaletteItemComponent implements OnInit {
    background:string = "grey";

    constructor(private route:ActivatedRoute) {}

    ngOnInit() { 
        this.route.params.subscribe(params =>{
            console.log(`------ params['background'] = ${params['background']}`);
            this.background = params['background'];
        });
    }
}