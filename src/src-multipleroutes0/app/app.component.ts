import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Group Study</h1>
    <nav>
      <a routerLink="/group" routerLinkActive="active">그룹 목록</a>
      <a routerLink="/subject" routerLinkActive="active">주제 목록</a>
    </nav>
    <router-outlet></router-outlet>
    <div>END OF AppComponent</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.logger.startLoggingRouterEvent();
  }
}
