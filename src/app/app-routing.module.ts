import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './contacts/list/list';
import { Add } from './contacts/add/add';
import { View } from './contacts/view/view';

const routes: Routes = [
  {
    path: "contacts",
    component: List,

  },
  {
    path: "contacts/add",
    component: Add,

  },
  {
    path: "contacts/:id",
    component: View,

  },
  {
    path: "edit/",
    component: View,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
