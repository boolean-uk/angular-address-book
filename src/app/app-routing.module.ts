import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/ListComponent/list/list.component';
import { AddComponent } from './contacts/AddComponent/add/add.component';
import { ViewComponent } from './contacts/ViewComponent/view/view.component';

const routes: Routes = [
  { path: "contacts", component: ListComponent},
  { path: "contacts/add", component: AddComponent},
  { path: "contacts/:id", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
