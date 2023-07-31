import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'add-new-contact', component: AddNewContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
