import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./crises" routerLinkActive="active">Manage Crises</a>
      <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
      <a routerLink="./crises2" routerLinkActive="active">Manage Crises2</a>
      <a routerLink="./heroes2" routerLinkActive="active">Manage Heroes2</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}
