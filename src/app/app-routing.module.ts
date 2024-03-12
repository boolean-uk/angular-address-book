import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './addressbook/add/add.component';
import { ListComponent } from './addressbook/list/list.component';
import { ViewComponent } from './addressbook/view/view.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
