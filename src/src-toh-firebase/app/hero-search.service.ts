import { Injectable } from '@angular/core';

import { Observable }     from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private db: AngularFireDatabase) { }

  search(term: string) {
    return this.db.list<Hero>('/heroes', ref =>
      ref.orderByChild('name').startAt(term).endAt(term + '\uffff').limitToFirst(10)
    ).valueChanges()
    .do(value => console.dir(value));
  }
}
