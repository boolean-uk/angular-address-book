import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: 'contact/:id', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
