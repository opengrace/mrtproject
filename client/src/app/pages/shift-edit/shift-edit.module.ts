import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftEditComponent } from './shift-edit.component';
import { ShiftEditRoutingModule } from './shift-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ShiftEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ShiftEditComponent
  ]
})
export class ShiftEditModule { }
