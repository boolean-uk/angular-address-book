import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { ContactDitailsComponent } from './contacts/contact-ditails/contact-ditails.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsListComponent,
  },
  {
    path: 'contacts/create',
    component: CreateContactComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDitailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
