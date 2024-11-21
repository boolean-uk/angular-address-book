import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';

const routes: Routes = [
  {
    path: "",
    component: ContactListComponent
  },
  {
    path: "contact/:id",
    component: ContactComponent
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
export class AppRoutingModule { }
