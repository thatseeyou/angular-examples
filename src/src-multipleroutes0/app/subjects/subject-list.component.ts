import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, SubjectService } from '../data/subject.service';

@Component({
  template: `
    <div class="subjects">
      <ul class="subject-list">
        <li *ngFor="let subject of subjects">
        <span routerLinkActive="active"><a [routerLink]="['../', subject.path]" >{{subject.subject}}</a></span>
        </li>
      </ul>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects:Subject[];

  constructor(
    private subjectService:SubjectService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
    this.route.url
      .subscribe(urlSegments => {
        if (urlSegments[0].path == "__first__") {
          this.router.navigate([this.subjectService.getFirstSubject().path], { relativeTo: this.route.parent });
        }
      });
  }
}
