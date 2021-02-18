import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SharedModule,
    MenuModule,
    BrowserAnimationsModule,
    ChartModule,
    OrderListModule,
    DataViewModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SharedModule,
    MenuModule,
    BrowserAnimationsModule,
    ChartModule,
    OrderListModule,
    DataViewModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GeneralModule {}
