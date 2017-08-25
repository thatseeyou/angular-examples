import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private db: AngularFireDatabase) { }

  getHeroes() {
    return this.db.list('/heroes').do(value => console.dir(value)) as FirebaseListObservable<Hero[]>;
    // return this.db.list('/heroes');
  }

  // getHero(id: number): Observable<Hero> {
  getHero(id: number) {
    return this.db.list('/heroes', { 
        query: { 
          orderByChild: 'id', 
          equalTo: id 
        } 
      }
    )
    .map(heroes => heroes[0]);
  }

  delete(key: string) {
    return this.db.list('/heroes').remove(key).catch(this.handleError);
  }

  create(id: number, name: string) {
    return this.db.list('/heroes').push({
      id: id,
      name: name
    })
  }

  update(hero: Hero) {
    /* $key is ignored */
    return this.db.list('/heroes').update(hero.$key, hero);
  }

  resetDB() {
    const heroes = this.db.list('/heroes');
    heroes.remove();

    const records = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];

    for (var record of records) {
      heroes.push(record);
    }
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

