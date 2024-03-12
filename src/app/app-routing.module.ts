import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { NewContactPageComponent } from './new-contact-page/new-contact-page.component';
import { ViewContactPageComponent } from './view-contact-page/view-contact-page.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListPageComponent,
  },
  {
    path: 'contacts/new',
    component: NewContactPageComponent,
  },
  {
    path: 'contacts/edit/:contactId',
    component: NewContactPageComponent,
  },
  {
    path: 'contacts/:contactId',
    component: ViewContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
