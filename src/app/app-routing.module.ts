import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsListComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'view-contact/:id', component: ViewContactComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
