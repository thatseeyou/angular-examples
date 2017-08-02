import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GroupListGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log(`> GroupListGuard::canActivateChild`);
        return Observable.of(false).delay(5000);
    }
}