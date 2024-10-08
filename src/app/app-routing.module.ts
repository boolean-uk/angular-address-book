import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/list/contacts.component';
import { AddContactComponent } from './contacts/add/add.component';
import { ViewComponent } from './contacts/view/view.component';
import { EditComponent } from './contacts/edit/edit.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'add-contact', component: AddContactComponent},
  { path: 'view-contact/:id', component: ViewComponent},
  { path: 'edit-contact/:id', component: EditComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
