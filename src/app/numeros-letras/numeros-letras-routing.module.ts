import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumerosLetrasPage } from './numeros-letras.page';

const routes: Routes = [
  {
    path: '',
    component: NumerosLetrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumerosLetrasPageRoutingModule {}
