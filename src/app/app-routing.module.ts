import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { ViewContactComponent } from './layout/view-contact/view-contact.component';
import { AddContactComponent } from './layout/add-contact/add-contact.component';

const routes: Routes = [
  { path: "", component: ContactListComponent },
  { path: "contact/:contactIndex", component: ViewContactComponent },
  { path: "add", component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }