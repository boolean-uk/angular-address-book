import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressbookViewComponent } from './layout/addressbook/addressbook-view/addressbook-view.component';
import { SinglePersonViewComponent } from './layout/addressbook/single-person-view/single-person-view.component';
import { ContactFormViewComponent } from './layout/contact-form/contact-form-view/contact-form-view.component';

const routes: Routes = [
  { path: 'addressbook', component: AddressbookViewComponent },
  { path: 'addressbook/new', component: ContactFormViewComponent },
  { path: 'addressbook/:contactId', component: SinglePersonViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
