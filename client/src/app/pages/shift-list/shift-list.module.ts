import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftListComponent } from './shift-list.component';
import { ShiftListRoutingModule } from './shift-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ShiftListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ShiftListComponent
  ]
})
export class ShiftListModule { }
