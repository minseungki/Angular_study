import { Component, OnInit } from '@angular/core';
import { NoticeService } from "../../share/notice/notice.service";
import { Notice, NoticeHeader } from "../../share/notice/notice.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  rowData: Array<Notice>
  columnDefs: Array<NoticeHeader>

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this.rowData = this.noticeService.noticeArray
    this.columnDefs = this.noticeService.columns
  }

}
