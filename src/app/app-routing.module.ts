import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [{
  path: "",
  redirectTo: "home",
  pathMatch: "full"
}, {
  path: "home",
  component: ContactListComponent
}, {
  path: "contact",
  component: ContactFormComponent
}, {
  path: "contacts/:uuid",
  component: ContactViewComponent
}, {
  path: "contacts/edit/:uuid",
  component: ContactFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
