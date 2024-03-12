import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contact/list/list.component';
import { AddComponent } from './contact/add/add.component';
import { ViewComponent } from './contact/view/view.component';

const routes: Routes = [
  {path: "contacts", component: ListComponent},
  {path: "contacts/add", component: AddComponent},
  {path: "contacts/:id", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
