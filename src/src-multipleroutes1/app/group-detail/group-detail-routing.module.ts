import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupDetailComponent } from './group-detail.component';
import { GuardMonitorService }  from '../core/guard-monitor.service';

const routes: Routes = [
    {
        path: '',
        component: GroupDetailComponent,
        canActivate: [GuardMonitorService],
        canActivateChild: [GuardMonitorService],
        canDeactivate: [GuardMonitorService],
        canLoad: [GuardMonitorService]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupDetailRoutingModule { }

