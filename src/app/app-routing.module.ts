import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponentComponent } from './address-book-components/contacts-list-component/contacts-list-component.component';
import { AddFormComponent } from './address-book-components/add-form/add-form.component';
import { ContactViewPageComponent } from './address-book-components/contact-view-page/contact-view-page.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsListComponentComponent},
  { path: 'contacts/add', component: AddFormComponent},
  { path: 'contacts/contact/view/:id', component: ContactViewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
