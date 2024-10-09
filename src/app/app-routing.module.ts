import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsListComponent},
  { path: 'contacts/new-contact', component: NewContactComponent},
  { path: 'contacts/:id', component: ViewContactComponent},
  { path: 'contacts/edit/:id', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
