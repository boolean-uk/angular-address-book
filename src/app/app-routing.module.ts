import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './addressbook/list/list.component';
import { AddComponent } from './addressbook/add/add.component';
import { ViewComponent } from './addressbook/view/view.component';

const routes: Routes = [
  {
    path: "addressbook",
    component: ListComponent,
  },
  {
    path: "addressbook/add",
    component: AddComponent,
  },
  {
    path: "addressbook/:id",
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
