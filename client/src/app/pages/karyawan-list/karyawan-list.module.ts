import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaryawanListComponent } from './karyawan-list.component';
import { KaryawanListRoutingModule } from './karyawan-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    KaryawanListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    KaryawanListComponent
  ]
})
export class KaryawanListModule { }
