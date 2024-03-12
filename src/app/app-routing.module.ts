import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './layout/menu/contacts-list/contacts-list.component';
import { NewContactComponent } from './layout/menu/new-contact/new-contact.component';
import { ViewContactComponent } from './layout/menu/view-contact/view-contact.component';

const routes: Routes =
[
  {
    path: 'contacts',
    component: ContactsListComponent
  },
  {
    path: 'newContact',
    component: NewContactComponent
  },
  {
    path: 'contacts/:id',
    component: ViewContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
