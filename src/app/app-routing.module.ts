import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contacts/contactlist/contactlist.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';

const routes: Routes = [
  {path: 'contacts', component: ContactlistComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact/:id', component: ContactViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
