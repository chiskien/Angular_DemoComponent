import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoldsRoutingModule } from './molds-routing.module';
import { MoldsHomeComponent } from './molds-home/molds-home.component';


@NgModule({
  declarations: [
    MoldsHomeComponent
  ],
  imports: [
    CommonModule,
    MoldsRoutingModule
  ],
  exports: [MoldsHomeComponent]
})
export class MoldsModule { }
