import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'view/:id', component: ContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: '', component: ContactListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
