import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraductorNumerosLetrasPage } from './traductor-numeros-letras.page';

const routes: Routes = [
  {
    path: '',
    component: TraductorNumerosLetrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraductorNumerosLetrasPageRoutingModule {}
