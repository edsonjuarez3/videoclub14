import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginadetallepeliculaPageRoutingModule } from './paginadetallepelicula-routing.module';

import { PaginadetallepeliculaPage } from './paginadetallepelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginadetallepeliculaPageRoutingModule
  ],
  declarations: [PaginadetallepeliculaPage]
})
export class PaginadetallepeliculaPageModule {}
