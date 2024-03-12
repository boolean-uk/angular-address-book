import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  { path: 'create-contact', component: NewContactComponent},
  { path: '', component: ContactsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
