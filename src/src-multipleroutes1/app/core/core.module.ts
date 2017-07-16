import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LoggerService } from './logger.service';
import { ShowdownService } from './showdown.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { GuardMonitorService } from './guard-monitor.service';

@NgModule({
    imports: [],
    exports: [
    ],
    declarations: [],
    providers: [
        LoggerService,
        ShowdownService,
        GuardMonitorService
    ],
})
export class CoreModule { 
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
