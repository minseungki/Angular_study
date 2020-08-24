import { Component, OnInit } from '@angular/core';
import { Notice } from "../../share/notice/notice.interface";
import { NoticeService } from "../../share/notice/notice.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: Notice;
  id: number;

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
    });
    this.detail = this.noticeService.getData(this.id)
  }

}
