import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GroupService } from '../data/group.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let member of members">
      {{member}}
      </li>
    </ul>
  `,
  host: { class: 'group-detail' },
  styleUrls:['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  members:string[];

  constructor(
    private groupService:GroupService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.parent.url
      .subscribe(urlSegments => {
        let groupPath = urlSegments[0].path;
        if (groupPath == "__first__") {
          groupPath = this.groupService.getFirstGroup().path;
        }
        this.members = this.groupService.getGroup(groupPath).members;
      });
  }
}