import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // 프로퍼티 개념
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  onClickButton(commend) {
    this.clickEvent.emit(commend)
  }

  ngOnInit(): void {
  }

}
