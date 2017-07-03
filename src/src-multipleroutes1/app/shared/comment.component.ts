import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'oh-comment',
    template: `<cite>{{text}}</cite>
    <router-outlet>-- RouterOutlet@CommentComponent --</router-outlet>`
})
export class CommentComponent implements OnInit {
    @Input() text:string;

    constructor() { }

    ngOnInit() { }
}