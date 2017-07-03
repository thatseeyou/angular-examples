import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Group, GroupService } from '../data/group.service';

@Component({
  template: `
    <div class="groups">
      <ul class="group-list">
        <li *ngFor="let group of groups">
        <span routerLinkActive="active"><a [routerLink]="['../', group.path]" >{{group.displayName}}</a></span>
        </li>
      </ul>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups:Group[];

  constructor(
    private groupService:GroupService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.groups = this.groupService.getGroups();
    this.route.url
      .subscribe(urlSegments => {
        if (urlSegments[0].path == "__first__") {
          this.router.navigate([this.groupService.getFirstGroup().path], { relativeTo: this.route.parent });
        }
      });
  }
}
