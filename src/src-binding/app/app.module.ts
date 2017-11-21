import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WidgetModule } from './widget/widget.module';
import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
