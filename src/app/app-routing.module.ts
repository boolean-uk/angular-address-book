import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from "./contacts/all-contacts/contacts/contacts.component";
import {ContactDetailsComponent} from "./contacts/contact-details/contact-details/contact-details.component";
import {NewContactComponent} from "./contacts/new-contact/new-contact/new-contact.component";

const routes: Routes = [
  {
    path: "",
    component: ContactsComponent
  },
  {
    path: "contact/:id",
    component: ContactDetailsComponent
  },
  {
    path: "new-contact",
    component: NewContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
