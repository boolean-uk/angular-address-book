import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsViewComponent } from './contacts/contacts-view/contacts-view.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'create-contact', component: NewContactComponent},
  { path: '', component: ContactsListComponent},
  { path: 'contact/:id', component: ContactsViewComponent},
  { path: 'contact/edit/:id', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
