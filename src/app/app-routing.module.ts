import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./contact/list/list.component";
import {ViewComponent} from "./contact/view/view.component";
import {NewComponent} from "./contact/new/new.component";
import {EditComponent} from "./contact/edit/edit.component";

const routes: Routes = [
  {path: 'contacts', component: ListComponent},
  {path: 'contacts/new', component: NewComponent},
  {path: 'contacts/:id', component: ViewComponent},
  {path: 'contacts/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
