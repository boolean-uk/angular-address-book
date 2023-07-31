import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { ContactsListComponent } from './layout/contacts-list/contacts-list.component';
import { AddContactComponent } from './layout/add-contact/add-contact.component';
import { ViewContactComponent } from './layout/view-contact/view-contact.component';

const routes: Routes = [
  { 
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'contactsList',
    component: ContactsListComponent,
  },
  {
    path: 'addContact',
    component: AddContactComponent,
  },
  {
    path: 'contactsList/viewContact/:id',
    component: ViewContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
