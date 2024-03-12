import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: AddContactComponent },
  {
    path: 'contacts/:contactId',
    component: ViewContactComponent,
  },
  {
    path: 'contacts/:contactId/edit',
    component: EditContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
