import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditFormComponent } from './contacts/contact-edit-form/contact-edit-form.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactNewFormComponent } from './contacts/contact-new-form/contact-new-form.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';

const routes: Routes = [
  { path: 'new', component: ContactNewFormComponent },
  { path: 'list', component: ContactListComponent },
  { path: 'view/:id', component: ContactViewComponent },
  { path: 'edit/:id', component: ContactEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
