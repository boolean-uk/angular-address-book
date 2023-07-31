import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts-list',
    pathMatch: 'full'
  },
  { 
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'contacts-list/:id',
    component: ContactViewComponent
  },
  {
    path: 'contact-list/new',
    component: ContactFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
