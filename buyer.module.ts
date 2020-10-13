import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgpSortModule} from 'ngp-sort-pipe';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {AgGridModule} from 'ag-grid-angular';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { BuyerRoutingModule } from './buyer.routing.module';
import { ProductFilterPipe } from './productfilter.pipe';



@NgModule({
  declarations: [ ProductFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgpSortModule,
    BuyerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    AgGridModule.withComponents([]),
  ]
})
export class BuyerModule { }