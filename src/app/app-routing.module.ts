import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component'; // Import the new component

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: NewContactComponent },
  { path: 'contacts/:id', component: ContactViewComponent }, // Route for viewing a specific contact
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
