import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts/view/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './contacts/contact/view-contact.component';

const routes: Routes = [
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact/:id', component: ViewContactComponent},
  {path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
