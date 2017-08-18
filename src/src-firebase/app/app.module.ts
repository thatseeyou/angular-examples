import { environment }               from '../environments/environment';

import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { HttpModule }                from '@angular/http';

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent }              from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
