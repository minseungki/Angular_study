import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  noticeArray: Array<Object>
  columns: Array<Object>

  constructor() {
  }


  ngOnInit() {
    this.noticeArray = [
      {id: 1, name: '홍길동', age: 10},
      {id: 2, name: '김유신', age: 20},
      {id: 3, name: '이순신', age: 30},
      {id: 4, name: '세종대왕', age: 40},
      {id: 5, name: '신사임당', age: 50},
      {id: 6, name: '퇴계이황', age: 60},
      {id: 7, name: '대조영', age: 70},
      {id: 8, name: '왕건', age: 80},
      {id: 9, name: '이성계', age: 90}
    ]
    this.columns = [
      {headerName: 'No.', field: 'id' },
      {headerName: 'Name', field: 'name' },
      {headerName: 'Age', field: 'age'}
    ]
  }
}
