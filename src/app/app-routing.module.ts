import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'contact-profile/:id', component: ContactProfileComponent },
  { path: 'edit-contact/:id', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }