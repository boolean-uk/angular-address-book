import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsListComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'view-contact/:id', component: ViewContactComponent }, 
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }