import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaMultiPage } from './tabla-multi.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMultiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaMultiPageRoutingModule {}
