import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaMultiplicarPage } from './tabla-multiplicar.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMultiplicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaMultiplicarPageRoutingModule {}
