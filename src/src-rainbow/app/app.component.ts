import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    `,
    styles: [
    `
    `
    ]
})
export class AppComponent implements OnInit { 
    constructor(private logger:LoggerService, private router:Router) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
    } 
}