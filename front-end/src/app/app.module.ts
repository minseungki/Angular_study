import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {SectionModule} from "./section/section.module";

@NgModule({
  // 컴포넌트
  declarations: [
    AppComponent
  ],
  // 다른 모듈
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule
  ],
  // 컴포넌트가 아닌 서비스 모듈
  providers: [],
  // 실행할 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule { }
