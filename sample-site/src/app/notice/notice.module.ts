import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class NoticeModule { }
