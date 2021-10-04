import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaMultiplicarPageRoutingModule } from './tabla-multiplicar-routing.module';

import { TablaMultiplicarPage } from './tabla-multiplicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TablaMultiplicarPageRoutingModule
  ],
  declarations: [TablaMultiplicarPage]
})
export class TablaMultiplicarPageModule {}
