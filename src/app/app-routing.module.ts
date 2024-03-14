import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './contact-list/list-contacts/list-contacts.component';
import { ViewContactComponent } from './contact-list/view-contact/view-contact.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
import { AddContactComponent } from './contact-list/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListContactsComponent,
  },
  {
    path: 'contact/new',
    component: AddContactComponent,
  },
  {
    path: 'contact/:id/edit',
    component: EditContactComponent,
  },
  {
    path: 'contact/:id',
    component: ViewContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
