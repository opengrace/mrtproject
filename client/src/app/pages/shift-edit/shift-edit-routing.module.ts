import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftEditComponent } from './shift-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ShiftEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftEditRoutingModule { }
