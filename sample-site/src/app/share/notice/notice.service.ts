import { Injectable } from '@angular/core';
import { Notice, NoticeHeader } from "./notice.interface";
import {UtilsService} from "../utils/utils.service";
import {RouterService} from "../router/router.service";

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  noticeArray: Array<Notice>
  columns: Array<NoticeHeader>

  constructor(
    private routerService: RouterService,
    private utilsService: UtilsService
  ) {
    this.noticeArray = [
      {id: 1, title: '운영정책 변경안내1', content: '운영정책 변경안내1', regDate: '2020.08.24'},
      {id: 2, title: '운영정책 변경안내2', content: '운영정책 변경안내2', regDate: '2020.08.24'},
      {id: 3, title: '운영정책 변경안내3', content: '운영정책 변경안내3', regDate: '2020.08.24'},
      {id: 4, title: '운영정책 변경안내4', content: '운영정책 변경안내4', regDate: '2020.08.24'},
      {id: 5, title: '운영정책 변경안내5', content: '운영정책 변경안내5', regDate: '2020.08.24'},
      {id: 6, title: '운영정책 변경안내6', content: '운영정책 변경안내6', regDate: '2020.08.24'},
      {id: 7, title: '운영정책 변경안내7', content: '운영정책 변경안내7', regDate: '2020.08.24'},
      {id: 8, title: '운영정책 변경안내8', content: '운영정책 변경안내8', regDate: '2020.08.24'},
      {id: 9, title: '운영정책 변경안내9', content: '운영정책 변경안내9', regDate: '2020.08.24'}
    ]
    this.columns = [
      {headerName: 'No.', field: 'id' },
      {headerName: 'Name', field: 'name' },
      {headerName: 'content', field: 'content'}
    ]
  }

  getData(id) {
    let result: Notice

    if (id !== 0) {
      this.noticeArray.map((item) => {
        if (item.id === id) {
          result = item
        }
      })
    } else {
      result = {id:0, title:'', content: '', regDate: ''}
    }

    return result
  }

  checkForm(notice) {
    if (this.utilsService.isNull(notice.title)) {
      alert('제목은 필수 입력 항목 입니다.')
      return
    }
    if (this.utilsService.isNull(notice.content)) {
      alert('내용은 필수 입력 항목 입니다.')
      return
    }

    let message = '등록완료!'
    let target = '/notice'
    if (notice.id !== 0) {
      message = '수정완료!'
      target = '/notice' + notice.id + '/detail'
    }
    alert(message)
    this.routerService.goPage(target)
  }

}
