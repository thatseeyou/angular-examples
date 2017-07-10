import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p1'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p2'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p3'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p4'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p5'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p6'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p7'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];