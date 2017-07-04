import { Component, OnInit } from '@angular/core';
import { LoggerService} from './logger.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      <a [routerLink]="['/crisis-center', { outlets: {popup:'compose', aux:'comment/hoho'}}]">WithAuxiliaryRoutes</a>
    </nav>
    <router-outlet name="primary"></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <router-outlet name="aux"></router-outlet>
  `
})
//<a [routerLink]="'/crisis-center(popup:compose//aux:comment/hoho)'">WithAuxiliaryRoutes</a>
export class AppComponent implements OnInit {
  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.logger.startLoggingRouterEvent();
  }
}