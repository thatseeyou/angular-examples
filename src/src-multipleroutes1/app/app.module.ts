import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { CoreModule }       from './core/core.module';
import { SharedModule }     from './shared/shared.module';
import { DataModule }       from './data/data.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }          from './app.component';
import { SubjectListComponent } from './subjects/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    DataModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectDetailComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
