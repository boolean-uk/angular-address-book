import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddContactComponent} from "./add-contact/add-contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactViewComponent} from "./contact-view/contact-view.component";
const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'view/:id',
    component: ContactViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
