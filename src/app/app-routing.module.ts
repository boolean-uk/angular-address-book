import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './address/list/list.component';
import { AddComponent } from './address/add/add.component';
import { ViewComponent } from './address/view/view.component';
import { EditComponent } from './address/edit/edit.component';

const routes: Routes = [
  {
    path: "address", 
    component: ListComponent
  },
  {
    path: "address/add",
    component: AddComponent
  },
  {
    path: "address/:id",
    component: ViewComponent
  },
  {
    path: "address/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
