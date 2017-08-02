import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { 
    CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad,
    ActivatedRouteSnapshot, RouterStateSnapshot, Route
} from '@angular/router';

@Injectable()
export class GuardMonitorService implements CanActivate, CanActivateChild, CanDeactivate<Object>, Resolve<string>, CanLoad {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(`> CanActive for url:${route.url}`);
        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let path = childRoute.url.reduce((acc, current, index) => acc + current.path, '');
        console.log(`> CanActiveChild for url:${path}`);
        // if (path == 'linux-network') {
        //     console.log('>> false');
        //     return false;
        // }
        return true;
    }

    canDeactivate(component: Object, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
        let name = component ? component.constructor.name : 'nil';
        console.log(`> CanDeactivate@${name} for url:${currentRoute.url}`);
        return true;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let data = `@${route.url}`;
        console.log(`> Resolve for url:${route.url}`);
        return Observable.of(data).delay(5000).do(value => console.log('TIMEOUT'));
    }

    canLoad(route: Route) {
        console.log(`> CanLoad for ${route.path}`);
        return true;
    }
}