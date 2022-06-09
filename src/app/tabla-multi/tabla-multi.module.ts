import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaMultiPageRoutingModule } from './tabla-multi-routing.module';

import { TablaMultiPage } from './tabla-multi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaMultiPageRoutingModule
  ],
  declarations: [TablaMultiPage]
})
export class TablaMultiPageModule {}
