import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './book/add/add.component';
import { ListComponent } from './book/list/list.component';
import { ViewComponent } from './book/view/view.component';
import { EditComponent } from './book/edit/edit.component';

const routes: Routes = [
  {path: "book", component: ListComponent},
  {path: "book/add", component: AddComponent},
  {path: "book/:id", component: ViewComponent},
  {path: "book/edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
