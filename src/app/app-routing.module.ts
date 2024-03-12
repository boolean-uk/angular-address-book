// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './templates/contact-list/contact-list.component';
import { CreateContactComponent } from './templates/create-contact/create-contact.component';
import { ViewContactComponent } from './templates/view-contact/view-contact.component';
import { EditContactComponent } from './templates/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: CreateContactComponent },
  { path: 'view-contact/:id', component: ViewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: '**', redirectTo: '/contacts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
