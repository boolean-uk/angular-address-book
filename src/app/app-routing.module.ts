import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  {path:"contactslist", component: ContactsListComponent },
  {path:"add", component: AddContactComponent},
  {path:"contactview/:id", component:ViewContactComponent },
  {path:"edit/:id", component:EditContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
