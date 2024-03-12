import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/new',
    component: CreateContactComponent
  },
  {
    path: 'contacts/:id',
    component: ViewContactComponent
  },
  {
    path: 'contacts/edit/:id',
    component: EditContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
