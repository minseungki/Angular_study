import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { IndexComponent } from './index/index.component';
import { NoticeModule } from "./notice/notice.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NoticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
