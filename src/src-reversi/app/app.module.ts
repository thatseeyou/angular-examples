import { environment }   from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BoardService } from './board.service';

import { AppComponent } from './app.component';
import { BoardComponent } from './board.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    BoardComponent
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
