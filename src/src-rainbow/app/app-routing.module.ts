import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];