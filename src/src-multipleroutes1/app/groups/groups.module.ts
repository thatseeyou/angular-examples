import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule }  from './groups-routing.module';

import { GroupListComponent } from './group-list.component';

@NgModule({
    imports: [
        CommonModule,
        GroupsRoutingModule
    ],
    exports: [
        GroupListComponent
    ],
    declarations: [
        GroupListComponent
    ],
    providers: [],
})
export class GroupsModule { }
