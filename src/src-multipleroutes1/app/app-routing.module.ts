import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectListComponent }   from './subjects/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent }  from './not-found.component';
import { GuardMonitorService }  from './core/guard-monitor.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/group/__first__',
    pathMatch: 'full',

    canActivate: [GuardMonitorService],
    canActivateChild: [GuardMonitorService],
    canDeactivate: [GuardMonitorService],
    canLoad: [GuardMonitorService],
    resolve: {
      resolveAt: GuardMonitorService
    },
  },
  {
    path: 'group',
    loadChildren: 'src-multipleroutes1/app/groups/groups.module#GroupsModule',

    canActivate: [GuardMonitorService],
    canActivateChild: [GuardMonitorService],
    canDeactivate: [GuardMonitorService],
    canLoad: [GuardMonitorService],
    resolve: {
      resolveAt: GuardMonitorService
    },
  },
  {
    path: 'subject',

    canActivate: [GuardMonitorService],
    canActivateChild: [GuardMonitorService],
    canDeactivate: [GuardMonitorService],
    canLoad: [GuardMonitorService],
    resolve: {
      resolveAt: GuardMonitorService
    },
    children: [
      {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full',

        canActivate: [GuardMonitorService],
        canActivateChild: [GuardMonitorService],
        canDeactivate: [GuardMonitorService],
        canLoad: [GuardMonitorService],
        resolve: {
          resolveAt: GuardMonitorService
        },
      },
      {
        path: ':subject',
        component: SubjectListComponent,

        canActivate: [GuardMonitorService],
        canActivateChild: [GuardMonitorService],
        canDeactivate: [GuardMonitorService],
        canLoad: [GuardMonitorService],
        resolve: {
          resolveAt: GuardMonitorService
        },
        children: [
          {
            path: '',
            component: SubjectDetailComponent,

            canActivate: [GuardMonitorService],
            canActivateChild: [GuardMonitorService],
            canDeactivate: [GuardMonitorService],
            canLoad: [GuardMonitorService],
            resolve: {
              resolveAt: GuardMonitorService
            },
          }
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GuardMonitorService
  ]
})
export class AppRoutingModule { }
