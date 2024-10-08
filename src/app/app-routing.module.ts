import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: NewContactComponent },
  { path: 'contacts/:id', component: ShowContactComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
