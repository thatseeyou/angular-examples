import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { FirebaseListObservable } from 'angularfire2/database';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
      .map(heroes => heroes.slice(1, 5));
  }

}
