import { Injectable } from '@angular/core';

import { Observable }     from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private db: AngularFireDatabase) { }

  search(term: string) {
    return this.db.list('/heroes', { 
        query: { 
          orderByChild: 'name', 
          startAt: term,
          endAt: term + "\uffff",
          limitToFirst: 10
        } 
      }
    )
    .do(value => console.dir(value));
  }
}
