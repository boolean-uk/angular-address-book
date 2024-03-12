import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {path: "contact/add", component: ContactAddComponent}, 
  {path: "contact/:id", component: ContactViewComponent}, 
  {path: "contact/edit/:id", component: ContactEditComponent}, 
  {path: "contact", component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
