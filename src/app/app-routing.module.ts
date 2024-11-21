import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSpecificComponent } from './contact-specific/contact-specific.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContactListComponent },
  { path: 'add', component: ContactAddComponent },
  { path: 'contact/:id', component: ContactSpecificComponent },
  { path: 'edit/:id', component: EditContactComponent },
  { path: '**', redirectTo: '/home' }, // Redirect to home if the route doesn't match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
