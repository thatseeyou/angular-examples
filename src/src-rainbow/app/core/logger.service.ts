import { Injectable } from '@angular/core';
import { Route, Router, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LoggerService {
    routerEventsSubscription:Subscription;

    constructor(private router:Router) { }

    startLoggingRouterEvent() {
        this.routerEventsSubscription = this.router.events
            .subscribe(event => {
                if (event instanceof RoutesRecognized) {
                    console.log(`RoutesRecognized(id: ${event.id}, url: ${event.url}`);
                    console.log(`RouteStateSnapshot.url: ${event.state.url}`);
                    this.logActivatedRouteSnapshot(0, 0, event.state.root);
                }
                else {
                    console.log(event.toString());
                }
            });
    }

    stopLoggingRouterEvent() {
        if (this.routerEventsSubscription && !this.routerEventsSubscription.closed){
            this.routerEventsSubscription.unsubscribe();
        }
    }

    logActivatedRouteSnapshot(level: number, index: number, activatedRoute: ActivatedRouteSnapshot) {
        let indent = Array(level * 3 + 1).join(' ');
        let url = activatedRoute.url.map(segment => segment.toString()).join('|');
        let params = Object.keys(activatedRoute.params).map(key => `[${key}]=[${activatedRoute.params[key]}]`).join(',');
        let queryParams = Object.keys(activatedRoute.queryParams).map(key => `[${key}]=[${activatedRoute.queryParams[key]}]`).join(',');
        let data = Object.keys(activatedRoute.data).map(key => `[${key}]=[${activatedRoute.data[key]}]`).join(',');
        let component: string;
        if (typeof activatedRoute.component == 'string') {
            component = activatedRoute.component;
        }
        else if (typeof activatedRoute.component == 'undefined') {
            component = `undefined`;
        }
        else {
            component = activatedRoute.component.name;
        }
        if (activatedRoute.routeConfig) {
            console.log(`${indent}[${level}-${index}][routeConfig]:`);
            this.logRoute(indent + '      ', activatedRoute.routeConfig);
        }
        console.log(`${indent}[${level}-${index}][url]: ${url}`);
        if (params) {
            console.log(`${indent}[${level}-${index}][params]: ${params}`);
        }
        if (queryParams) {
            console.log(`${indent}[${level}-${index}][queryParams]: ${queryParams}`);
        }
        if (frameElement) {
            console.log(`${indent}[${level}-${index}][fragment]: ${activatedRoute.fragment}`);
        }
        console.log(`${indent}[${level}-${index}][component]: ${component}`);
        console.log(`${indent}[${level}-${index}][outlet]: ${activatedRoute.outlet}`);
        if (data) {
            console.log(`${indent}[${level}-${index}][data]: ${data}`);
        }
        // console.log(activatedRoute);

        activatedRoute.children.forEach((activatedRoute, index) => {
            this.logActivatedRouteSnapshot(level + 1, index, activatedRoute);
        })
    }

    private logRoute(indent:string, route:Route) {
        if (route.path !== undefined) {
            console.log(`${indent}path: '${route.path}'`);
        }
        if (route.pathMatch) {
            console.log(`${indent}pathMatch: ${route.pathMatch}`);
        }
        if (route.redirectTo) {
            console.log(`${indent}redirectTo: ${route.redirectTo}`);
        }
        if (route.loadChildren) {
            console.log(`${indent}loadChildren: ${route.loadChildren}`);
        }
    }
}