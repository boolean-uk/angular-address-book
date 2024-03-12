import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './address-book/contacts-list/contacts-list.component';
import { ContactViewComponent } from './address-book/contact-view/contact-view.component';
import { ContactAddFormComponent } from './address-book/contact-add-form/contact-add-form.component';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/view/:id', component: ContactViewComponent },
  { path: 'contact/add', component: ContactAddFormComponent },
  { path: 'contact/edit/:id', component: ContactAddFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
