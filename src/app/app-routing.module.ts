import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts-list/contacts-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'create-contact', component: CreateContactComponent },
  { path: 'view-contact/:id', component: ViewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  {path: 'delete-contact/:id', component: DeleteContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
