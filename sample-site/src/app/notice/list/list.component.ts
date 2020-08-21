import { Component, OnInit } from '@angular/core';
import {NoticeService} from "../../share/notice.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // rowData: Array<Object>
  // columnDefs: Array<Object>
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    // this.rowData = this.noticeService.noticeArray
    // this.columnDefs = this.noticeService.columns
  }

}
