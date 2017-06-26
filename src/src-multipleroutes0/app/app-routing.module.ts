import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent } from './groups/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { SubjectListComponent } from './subjects/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/group',
    pathMatch: 'full',
  },
  {
    path: 'group',
    children: [
      {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full'
      },
      {
        path: ':group',
        component: GroupListComponent,
        children: [
          {
            path: '',
            component: GroupDetailComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'subject',
    children: [
      {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full'
      },
      {
        path: ':subject',
        component: SubjectListComponent,
        children: [
          {
            path: '',
            component: SubjectDetailComponent,
          }
        ]
      }
    ]
  },
  { path: '.html',   redirectTo: '/group', pathMatch: 'full' },
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
  ]
})
export class AppRoutingModule { }
