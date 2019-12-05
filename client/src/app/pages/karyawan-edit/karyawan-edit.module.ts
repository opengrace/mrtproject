import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaryawanEditComponent } from './karyawan-edit.component';
import { KaryawanEditRoutingModule } from './karyawan-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    KaryawanEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    KaryawanEditComponent
  ]
})
export class KaryawanEditModule { }
