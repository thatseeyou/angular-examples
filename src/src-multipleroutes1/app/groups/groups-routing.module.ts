import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent }   from './group-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full'
    },
    {
        path: ':group',
        component: GroupListComponent,
        loadChildren: 'src-multipleroutes1/app/group-detail/group-detail.module#GroupDetailModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule { }
