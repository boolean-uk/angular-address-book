import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './layout/contact/contact-form/contact-form.component';
import { ContactListComponent } from './layout/contact/contact-list/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: 'addContact',
    component: ContactFormComponent
  },

  {
    path: 'contactList',
    component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
