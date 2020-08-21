import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@NgModule({
  // 하나의 컴포넌트는 하나의 모듈에 등록 되어 있어야 한다.
  // 컴포넌트는 모듈에 등록 되어 있어야 사용 가능 하다.
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  // 컴포넌트를 export 하여 다른 컴포넌트에서 사용 가능 하게 설정
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
