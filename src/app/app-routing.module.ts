import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'view-contact', component: ViewContactComponent },
  { path: 'view-contact/:id', component: ViewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
