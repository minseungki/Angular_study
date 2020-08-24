import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { ListComponent } from "./notice/list/list.component";
import { DetailComponent } from "./notice/detail/detail.component";
import { EditComponent } from "./notice/edit/edit/edit.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'notice',
    component: ListComponent
  },
  {
    path: 'notice/:id/detail',
    component: DetailComponent
  },
  {
    path: 'notice/:id/edit',
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
