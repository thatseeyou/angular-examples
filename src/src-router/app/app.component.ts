import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <router-outlet name="primary"></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if (event instanceof RoutesRecognized ) {
          console.log(`RoutesRecognized(id: ${event.id}, url: ${event.url}`);
          console.log(`RouteStateSnapshot.url: ${event.state.url}`);
          this.logActivatedRouteSnapshot(0, 0, event.state.root);
        }
        else {
          console.log(event.toString());
        }
      });
  }

  logActivatedRouteSnapshot(level:number, index:number, activatedRoute: ActivatedRouteSnapshot) {
    let indent = Array(level * 3 + 1).join(' ');
    let url = activatedRoute.url.map(segment => segment.toString()).join('|');
    let queryParams = Object.keys(activatedRoute.queryParams).map(key => `[${key}]=[${activatedRoute.queryParams[key]}]`).join(',');
    let data = Object.keys(activatedRoute.data).map(key => `[${key}]=[${activatedRoute.data[key]}]`).join(',');
    let component: string;
    if (typeof activatedRoute.component == 'string') {
      component = activatedRoute.component;
    }
    else if (typeof activatedRoute.component == 'undefined') {
      component = `'undefined'`;
    }
    else {
      component = activatedRoute.component.name;
    }
    console.log(`${indent}[${level}-${index}][url]: ${url}`);
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
}
