import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';
import { EditFormComponent } from './contacts/edit-form/edit-form.component';


const routes: Routes = [
  {path: '', component:ContactListComponent},
  {path: 'contacts/add', component:ContactFormComponent},
  {path: 'contacts/:id', component:ContactViewComponent},
  {path: 'contacts/edit/:id', component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
