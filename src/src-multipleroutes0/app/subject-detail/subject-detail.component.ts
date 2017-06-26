import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, SubjectService } from '../data/subject.service';
import { ShowdownService } from '../core/showdown.service';

@Component({
  template: `
    <div #description>{{makeHtml(description, subject.markdown)}}</div>
  `,
  host: { class: 'subject-detail' },
  styleUrls:['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  subject:Subject;

  constructor(
    private subjectService:SubjectService,
    private route:ActivatedRoute,
    private showdown:ShowdownService,
  ) {}

  ngOnInit() {
    this.route.parent.url
      .subscribe(urlSegments => {
        let subjectPath = urlSegments[0].path;
        if (subjectPath == '__first__') {
          subjectPath = this.subjectService.getFirstSubject().path;
        }
        this.subject = this.subjectService.getSubject(subjectPath);
      });
  }

  makeHtml(container:HTMLDivElement, markdown:string) {
    container.innerHTML = this.showdown.makeHtml(markdown);
  }
}