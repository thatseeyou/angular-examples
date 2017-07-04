import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    `,
    styles: [`
    `]
})

export class PaletteItemComponent implements OnInit {
    constructor(private route:ActivatedRoute) {}

    ngOnInit() { 
        this.route.params.subscribe(params =>{
        });
    }
}