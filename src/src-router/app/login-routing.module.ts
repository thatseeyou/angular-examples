import { NgModule }                  from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';
import { AuthGuard, AuthGuardDummy } from './auth-guard.service';
import { AuthService }               from './auth.service';
import { LoginComponent }            from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthGuardDummy,
    AuthService
  ]
})
export class LoginRoutingModule {}
