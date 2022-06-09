import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumerosLetrasPageRoutingModule } from './numeros-letras-routing.module';

import { NumerosLetrasPage } from './numeros-letras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumerosLetrasPageRoutingModule
  ],
  declarations: [NumerosLetrasPage]
})
export class NumerosLetrasPageModule {}
