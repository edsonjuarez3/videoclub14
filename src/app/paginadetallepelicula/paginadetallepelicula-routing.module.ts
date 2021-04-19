import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginadetallepeliculaPage } from './paginadetallepelicula.page';

const routes: Routes = [
  {
    path: '',
    component: PaginadetallepeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginadetallepeliculaPageRoutingModule {}
