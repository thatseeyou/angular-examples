import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of heroes';
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/heroes').valueChanges();
  }
}
