import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact/list' , pathMatch: 'full'},
  { path: 'contact/list', component: ContactListComponent},
  { path: 'contact/new', component: ContactNewComponent},
  { path: 'contact/:id', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
