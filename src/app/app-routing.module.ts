import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/ListComponent/list/list.component';
import { ViewComponent } from './contacts/ViewComponent/view/view.component';
import { AddComponent } from './contacts/AddContactComponent/add/add.component';
import { EditComponent } from './contacts/EditContactComponent/edit/edit.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: AddComponent},
  { path: 'contacts/view/:id', component: ViewComponent},
  { path: 'contacts/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
