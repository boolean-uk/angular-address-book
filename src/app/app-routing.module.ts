import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './addressbook/add/add.component';
import { ListComponent } from './addressbook/list/list.component';
import { ViewComponent } from './addressbook/view/view.component';
import { EditComponent } from './addressbook/edit/edit.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts/:id', component: ViewComponent },
  { path: 'contacts/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
