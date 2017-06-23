import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oh-comment',
  template: `<cite>{{text}}</cite>
    <router-outlet>-- RouterOutlet@CommentComponent --</router-outlet>`
})
export class CommentComponent implements OnInit {
  @Input() text: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.text = params.text;
      })
  }
}