import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EditComponent } from './edit/edit/edit.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class NoticeModule { }
