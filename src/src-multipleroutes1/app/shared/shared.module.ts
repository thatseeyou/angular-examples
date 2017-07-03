import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommentComponent } from './comment.component';

@NgModule({
    imports: [
        RouterModule  // router-outlet
    ],
    declarations: [
        CommentComponent
    ],
    providers: [/* TODO: Providers go here */],
    exports: [
        CommentComponent
    ]
})
export class SharedModule { }
