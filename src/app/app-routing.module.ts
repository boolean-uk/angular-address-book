import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';

const routes: Routes = [
  {
    path: "contacts",
    component: ContactsListComponent
  },

  {
    path: "contacts/new",
    component: CreateContactComponent
  },
  {
    path: "contacts/:contactId",
    component: ViewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
