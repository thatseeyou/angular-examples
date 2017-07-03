import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupDetailRoutingModule } from './group-detail-routing.module';

import { GroupDetailComponent } from './group-detail.component';

@NgModule({
    imports: [
        CommonModule,
        GroupDetailRoutingModule
    ],
    exports: [
        // GroupDetailComponent
    ],
    declarations: [
        GroupDetailComponent
    ],
    providers: [],
})
export class GroupDetailModule { }
