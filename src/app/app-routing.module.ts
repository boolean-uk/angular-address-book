import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component'; 

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'add-new-contact', component: AddNewContactComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
