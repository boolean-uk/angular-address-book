import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewContactComponent} from "./layout/new-contact/new-contact.component";
import {ContactListComponent} from "./layout/contact-list/contact-list.component";
import {ViewContactComponent} from "./layout/view-contact/view-contact.component";

const routes: Routes = [
  {
    path: 'contacts/:id',
    component: ViewContactComponent,
  },
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  {
    path: 'new-contact',
    component: NewContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
