import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    <ul>
        <li><a [routerLink]="[{outlets: rainbow}]">Rainbow</a></li>
        <li><a [routerLink]="[{outlets: grayscale}]">Gray scale</a></li>
    </ul>
    <div class="palette">
        <input class="palette-item" (change)="onChange('p1', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p2', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p3', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p4', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p5', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p6', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p7', $event)" placeholder="color"/>
    </div>
    <div class="palette">
        <div class="palette-item"><router-outlet name="p1"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p2"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p3"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p4"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p5"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p6"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p7"></router-outlet></div>
    </div>
    `,
    styles: [
    `
        .palette {
            display: flex;
        }
        .palette-item {
            display: inline-block;
        }
        input.palette-item {
            padding: 0;
            border: 1px solid #ccc;
            width: 98px;
        }
    `
    ]
})
export class AppComponent implements OnInit { 
    readonly rainbow = {
        p1: 'red',
        p2: 'orange',
        p3: 'yellow',
        p4: 'green',
        p5: 'blue',
        p6: 'navy',
        p7: 'purple'
    }

    readonly grayscale = {
        p1: '#222',
        p2: '#444',
        p3: '#666',
        p4: '#888',
        p5: '#aaa',
        p6: '#ccc',
        p7: '#eee'
    }

    constructor(private logger:LoggerService, private router:Router) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
    } 

    onChange(outlet:string, event:Event) {
        let value = (event.target as HTMLInputElement).value;
        console.log(`outlet = ${outlet}, background = ${value}`);
        let outlets:{
            [outlet:string]:string;
        } = {};
        outlets[outlet] = value;
        this.router.navigate([{outlets: outlets}]);
    }
}