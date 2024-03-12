import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './layout/create-contact/create-contact.component';
import { ContactsListComponent } from './layout/contacts-list/contacts-list.component';
import { ViewContactComponent } from './layout/view-contact/view-contact.component';
import { UpdateContactComponent } from './layout/update-contact/update-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsListComponent,
  },
  {
    path: 'contacts/new',
    component: CreateContactComponent,
  },
  {
    path: 'contacts/view/:contactId',
    component: ViewContactComponent,
  },
  {
    path: 'contacts/update',
    component: UpdateContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
