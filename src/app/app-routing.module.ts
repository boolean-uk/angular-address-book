import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsPageComponent} from "./layout/contacts-page/contacts-page.component";
import {ContactViewPageComponent} from "./layout/contact-view-page/contact-view-page/contact-view-page.component";
import {ContactFormPageComponent} from "./layout/contact-form-page/contact-form-page/contact-form-page.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsPageComponent,
    title: 'Contacts'
  },
  {
    path: 'contacts/view/:id',
    component: ContactViewPageComponent,
    title: 'Contact'
  },
  {
    path: 'contacts/add',
    component: ContactFormPageComponent,
    title: 'Add Contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
