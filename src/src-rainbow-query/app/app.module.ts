import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { PaletteItemComponent } from './palette-item.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,

        CoreModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PaletteItemComponent
    ],
    providers: [/* TODO: Providers g here */],
    bootstrap: [AppComponent]
})
export class AppModule { }
