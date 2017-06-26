import { NgModule } from '@angular/core';

import { GroupService } from './group.service';
import { SubjectService } from './subject.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        GroupService,
        SubjectService
    ],
})
export class DataModule { }
