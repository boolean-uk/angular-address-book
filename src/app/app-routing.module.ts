import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponentComponent } from './contacts/list-contacts-component/list-contacts-component.component';
import { ViewContactComponentComponent } from './contacts/view-contact-component/view-contact-component.component';
import { CreateContactComponentComponent } from './contacts/create-contact-component/create-contact-component.component';
import { EditContactComponentComponent } from './contacts/edit-contact-component/edit-contact-component.component';

const routes: Routes = [
  { path: 'contacts', component: ListContactsComponentComponent },
  { path: 'contacts/:id', component: ViewContactComponentComponent },
  { path: 'contacts/:id/edit', component: EditContactComponentComponent },
  { path: 'create', component: CreateContactComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
