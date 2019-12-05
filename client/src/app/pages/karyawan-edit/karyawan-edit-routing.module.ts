import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaryawanEditComponent } from './karyawan-edit.component';

const routes: Routes = [
  {
    path: '',
    component: KaryawanEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaryawanEditRoutingModule { }
