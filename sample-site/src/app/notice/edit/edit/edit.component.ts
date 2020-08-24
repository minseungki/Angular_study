import { Component, OnInit } from '@angular/core';
import { Notice } from "../../../share/notice/notice.interface";
import { NoticeService } from "../../../share/notice/notice.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { RouterService } from "../../../share/router/router.service";
import {UtilsService} from "../../../share/utils/utils.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  detail: Notice;
  id: number;
  checkoutForm;

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private routerService: RouterService
  ) {
    this.checkoutForm = this.formBuilder.group({
      title: '',
      content: ''
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
    });
    this.detail = this.noticeService.getData(this.id)
  }

  onSubmit(data) {
    this.noticeService.checkForm(data)
  }

  onReset() {
    this.checkoutForm.reset()
  }

  onHistoryBack() {
    this.routerService.historyBack()
  }
}
