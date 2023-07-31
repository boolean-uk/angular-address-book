import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './layout/contact/contact-form/contact-form.component';
import { ContactListComponent } from './layout/contact/contact-list/contact-list.component';
import { ContactDetailsComponent } from './layout/contact/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'addContact',
    component: ContactFormComponent
  },

  {
    path: 'contactList',
    component: ContactListComponent
  },

  {
    path: 'contactList/:id',
    component: ContactDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
