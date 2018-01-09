import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  constructor(private db: AngularFireDatabase) { }

  getHeroes() {
    // return this.db.list<Hero>('/heroes').valueChanges().do(value => console.dir(value));
    return this.db.list<Hero>('/heroes').snapshotChanges().map(changes => {
      console.log(changes);
      let x = changes.map(c => ({ "$key": c.payload.key, ...c.payload.val() }));
      console.log(x);
      return x;
    })
  }

  // getHero(id: number): Observable<Hero> {
  getHero(id: number) {
    return this.db.list<Hero>('/heroes', ref =>
      ref.orderByChild('id').equalTo(id)
    ).snapshotChanges().map(changes => {
      return changes.map(c => ({ "$key": c.payload.key, ...c.payload.val() }));
    })
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
    return this.db.list('/heroes').update(hero.$key, {
      id: hero.id,
      name: hero.name
    });
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

